import React from "react";
import "../styles/Rates.css";
import { Link } from "react-router-dom";

const Rates = () => {
  return (
    <div className="rates-container">
      <h1>RATES</h1>
      <h2>Flat Rate Zones:</h2>
      <h3>Flat Rate Charges</h3>
      <p>
        The following popular destinations have flat-rate charges from Denver
        International Airport (one-way fare, airport access fee already
        included):
      </p>
      <ul>
        <li>
          <strong>Boulder:</strong> $114.03
        </li>
        <li>
          <strong>Downtown Denver:</strong> $71.03
        </li>
        <li>
          <strong>Denver Tech Center:</strong> $79.03
        </li>
        <li>
          <strong>Tower Road:</strong> $36.03
        </li>
      </ul>
      <h3>Metered Taxicab Rates</h3>
      <p>
        Fares to all other metro area destinations are based on the taxicab’s
        meter. For example, a one-way taxicab ride from the airport to Cherry
        Creek Shopping Center (near downtown Denver) typically costs $75 to $95,
        plus a $5.03 airport access fee for each metered taxi trip.
      </p>
      <p>
        Taxicabs pick-up and drop-off from Jeppesen Terminal, Level 5, Island 1,
        outside Doors 505, 507 and 511 (Terminal East), and Doors 506, 510 and
        512 (Terminal West).
      </p>
      <h3>Multiple Drop-Offs - Same Zone</h3>
      <p>
        If stated in the taxicab operator’s approved tariff, the flat rate from
        DEN may be increased by $5.00 for each additional drop-off within a
        zone. For example, if there are passengers dropped off at different
        points within the same zone, the total fare will be the flat rate plus
        an additional $5.00 charge for each drop-off location.
      </p>
      <h3>Multiple Drop-Offs - In/Outside Zone</h3>
      <p>
        In the case where the first passenger is dropped off at a point within a
        defined zone and a second passenger is dropped at a point outside of a
        defined zone, the fare for the first passenger will be the flat rate for
        that zone. The fare for the second passenger will be the meter fare from
        the first drop-off point to the second drop-off point.
      </p>
      <p>
        If the first passenger is dropped at a point outside of the defined
        zones, the flat rate will not apply to either passenger, even if the
        second passenger’s drop point is within a defined zone.
      </p>
      <h3>Other Rates</h3>
      <p>
        A non-flat rate trip charges will be $2.65 base fare plus $2.65 per mile
        and $0.40 per waiting minute if the vehicle is driving 15 miles per hour
        or less.
      </p>
      <p>
        THE BELOW LINK WILL TAKE YOU TO THE PUC PAGE "TAXICAB RATE ZONE MAPS".
      </p>
      <p>
        <Link
          to="https://sites.google.com/state.co.us/puc-zone-maps/home?authuser=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Taxicab Rate Zone Maps
        </Link>
      </p>
    </div>
  );
};

export default Rates;
