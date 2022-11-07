import React from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import Row from "./Components/Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      {/* Nav */}
      <Nav />

      {/* banner */}
      <Banner />

      {/* rows */}
      <Row title={"Trending Now "} fetchUrl={requests.fetchTrending} />
      <Row
        title={"Netflix-Orginals"}
        isLargeRow={true}
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title={"Top-Rated ⭐"} fetchUrl={requests.fetchTopRated} />
      <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
      <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
      <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies} />
      <Row title={"Documentaries"} fetchUrl={requests.fetchDocumantaries} />
    </div>
  );
}

export default App;
