import Header from "./Header";
import Footer from "./Footer";
import Course from "./Course";
// import FetchCars from "./FetchData";
// import FetchUsers from "./Users";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { useState } from "react";

export default function App(){

  const [node,setNode]=useState(14);
  const react={ name:"React", duration:4};
  const angular={ name:"Angular", duration:3};

  return (
    <div className="container">
      <Header />
      <main>
        <h2>Main Page</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quam eaque, labore porro quis rerum veniam veritatis alias, perspiciatis accusamus error. Doloremque est beatae expedita hic fugit eaque perspiciatis debitis.</p>
        <p>{react.name}, {react.duration}</p>
        <p>{angular.name}, {angular.duration}</p>
        <p>Node required: {node}</p>
        <hr />

        <Course name={react.name} duration={react.duration} nodeversion={node}></Course>
        <Course name={angular.name} duration={angular.duration} nodeversion={node}></Course>
        

      </main>
      <Footer name="Isha" />
    </div>
  );
}