import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../routes/Home";
import Announcements from "../routes/Announcements";
import ContactUS from "../routes/ContactUS";
import Rates from "../routes/Rates";
import Login from "../routes/Login";
import Signup from "../routes/Signup";
import BookATrip from "../routes/BookATrip";
import PrivateRoute from "../components/PrivateRoutes";
import { AuthProvider } from "../components/AuthContext";

const RouteManager = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="rates" element={<Rates />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="announcements" element={<Announcements />} />
            <Route
              path="contact"
              element={
                <PrivateRoute>
                  <ContactUS />
                </PrivateRoute>
              }
            />
            <Route
              path="bookatrip"
              element={
                <PrivateRoute>
                  <BookATrip />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default RouteManager;
