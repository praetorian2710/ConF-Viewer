import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ConferenceList.css";

var total = 0;
const ConferenceList = () => {
  const [conferences, setConferences] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [uniqueCountries, setUniqueCountries] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [uniqueCities, setUniqueCities] = useState([]);
  useEffect(() => {
    axios
      .get("https://gdscdev.vercel.app/api")
      .then((response) => {
        if (response.data.status) {
          total = response.data.content.meta.total;
          setConferences(response.data.content.data);
          const countries = Array.from(
            new Set(
              response.data.content.data.map((conf) => conf.venue_country)
            )
          );
          setUniqueCountries(countries);
          const cities = Array.from(
            new Set(response.data.content.data.map((conf) => conf.venue_city))
          );
          setUniqueCities(cities);
        } else {
          return (
            <div>
              <h1>NO DATA FOUND</h1>
            </div>
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="conference-list">
      <div className="header">
        <h1>Tech Conferences</h1>
        <h2>Total:{total}</h2>
        <div className="filter">
          <label htmlFor="countryFilter">Filter by Country: </label>
          <select
            id="countryFilter"
            value={selectedCountry}
            onChange={(event) => setSelectedCountry(event.target.value)}
          >
            <option value="">All Countries</option>
            {uniqueCountries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className="filter">
          <label htmlFor="countryFilter">Filter by City: </label>
          <select
            id="cityFilter"
            value={selectedCity}
            onChange={(event) => setSelectedCity(event.target.value)}
          >
            <option value="">All Cities</option>
            {uniqueCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="Main">
        {conferences
          .filter(
            (conference) =>
              (!selectedCountry ||
                conference.venue_country === selectedCountry) &&
              (!selectedCity || conference.venue_city === selectedCity)
          )
          .map((conference) => (
            <div key={conference.id} className="conference-card">
              <div className="img">
                <img src={conference.banner_image} alt={conference.title} />
                <img src={conference.organiser_icon} alt={conference.title} />
              </div>
              <h2>{conference.title}</h2>
              <p>{conference.description}</p>
              <p>Date: {conference.date_time.split("T")[0]}</p>
              <p>Time: {conference.date_time.split("T")[1]}</p>
              <p>Organizer: {conference.organiser_name}</p>
              <p>Venue: {conference.venue_name}</p>
              <p>City: {conference.venue_city}</p>
              <p>Country: {conference.venue_country}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ConferenceList;
