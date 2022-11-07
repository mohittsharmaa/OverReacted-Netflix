import React, { useState, useEffect } from "react";
import "../styles-sheets/Banner.css";
import requests from "../requests";
import axios from "../axios";

const Banner = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(requests.fetchNetflixOriginals);
      setBanner(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 2)
        ]
      );
      return response;
    }
    fetchData();
  }, []);

  // function shorten(str, n) {
  //   if (str.length >= n) {
  //     return str.substr(0, n);
  //   } else {
  //     return str;
  //   }
  // }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${banner?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {banner?.title || banner?.name || banner?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h3 className="banner-description">
          {banner?.overview}
          {/* {shorten(banner?.overview, 150)} */}
        </h3>
      </div>
      <div className="banner-fade"></div>
    </header>
  );
};

export default Banner;
