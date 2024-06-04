import React, { useState, useRef, useEffect } from "react";
import { useLoadScript, Autocomplete } from "@react-google-maps/api";
import axios from "axios";
import Logo from "../images/logo.png";
import "../styles/BookATrip.css";
import { useNavigate } from "react-router-dom";

const libraries = ["places"];

const BookATrip = () => {
  const navigate = useNavigate();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const mail = localStorage.getItem("email");
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    pickupAddress: "",
    dropoffAddress: "",
    pickupAddressCoords: null,
    dropoffAddressCoords: null,
  });

  const [distance, setDistance] = useState(null);
  const [fare, setFare] = useState(null);

  const autocompletePickupRef = useRef(null);
  const autocompleteDropoffRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceChanged = (autocomplete, name) => {
    const place = autocomplete.getPlace();
    const address = place.formatted_address;
    const coordinates = place.geometry.location;
    setFormData((prevData) => ({
      ...prevData,
      [name]: address,
      [`${name}Coords`]: coordinates,
    }));
  };

  useEffect(() => {
    const calculateDistanceAndFare = async () => {
      const { pickupAddressCoords, dropoffAddressCoords } = formData;
      if (pickupAddressCoords && dropoffAddressCoords) {
        try {
          const response = await axios.get(
            `https://router.project-osrm.org/route/v1/driving/${pickupAddressCoords.lng()},${pickupAddressCoords.lat()};${dropoffAddressCoords.lng()},${dropoffAddressCoords.lat()}?overview=false`
          );

          const distanceInMeters = response.data.routes[0].distance;
          const distanceInMiles = distanceInMeters * 0.000621371; // Convert meters to miles
          const calculatedFare = distanceInMiles * 2.8 + 3.5;

          setDistance(`${distanceInMiles.toFixed(2)} mi`);
          setFare(calculatedFare.toFixed(2));
        } catch (error) {
          console.error("Error fetching route from OSRM:", error);
        }
      }
    };

    calculateDistanceAndFare();
  }, [formData.pickupAddressCoords, formData.dropoffAddressCoords, formData]); // Add formData.pickupAddressCoords and formData.dropoffAddressCoords as dependencies

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = localStorage.getItem("name");
    const phoneNumber = localStorage.getItem("phoneNumber");

    const bookingData = {
      pickupDate: formData.date,
      name,
      phoneNumber,
      pickupAddress: formData.pickupAddress,
      dropoffAddress: formData.dropoffAddress,
      pickupTime: formData.time,
      distance,
      fare,
      email: mail,
    };

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        process.env.REACT_APP_BOOKING_API_URL,
        bookingData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        alert("Booking Success");

        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        alert("Booking Failed");
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("Server Error");
    }
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="book-trip-container">
      <form className="book-trip-form" onSubmit={handleSubmit}>
        <div className="logo-container">
          <img src={Logo} alt="logo" className="logo" />
        </div>
        <label>Pickup Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <label>Pickup Time</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <label>Pickup Address</label>
        <Autocomplete
          onPlaceChanged={() =>
            handlePlaceChanged(autocompletePickupRef.current, "pickupAddress")
          }
          onLoad={(autocomplete) =>
            (autocompletePickupRef.current = autocomplete)
          }
        >
          <input
            type="text"
            name="pickupAddress"
            value={formData.pickupAddress}
            onChange={handleChange}
            required
            placeholder="Pickup Address"
          />
        </Autocomplete>
        <label>Dropoff Address</label>
        <Autocomplete
          onPlaceChanged={() =>
            handlePlaceChanged(autocompleteDropoffRef.current, "dropoffAddress")
          }
          onLoad={(autocomplete) =>
            (autocompleteDropoffRef.current = autocomplete)
          }
        >
          <input
            type="text"
            name="dropoffAddress"
            value={formData.dropoffAddress}
            onChange={handleChange}
            required
            placeholder="Dropoff Address"
          />
        </Autocomplete>
        <button className="book-now-button" type="submit">
          Book Now
        </button>
      </form>
      {distance && <p>Distance: {distance}</p>}
      {fare && <p>Fare Estimate: ${fare}</p>}
    </div>
  );
};

export default BookATrip;
