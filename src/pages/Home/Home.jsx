import React from "react";
import "./Home.scss";
import About from "./components/About/About";
import Directions from "./components/Directions/Directions";
import Advantages from "./components/Advantages/Advantages";

const Home = () => {
  return (
    <>
      <About />
      <Directions />
      <Advantages />
    </>
  );
};

export default Home;
