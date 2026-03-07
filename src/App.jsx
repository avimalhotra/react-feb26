import Header from "./Header";
import Footer from "./Footer";
import Course from "./Course";
import FetchCars from "./FetchData";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { useState, useEffect } from "react";

export default function App(){

    // useEffect(()=>{
    //   fetch("https://www.techaltum.com/node/api").then(i=>i.json()).then(i=>console.log(i)).catch(e=>console.warn(e));
    // },[]);

  
  return (
    <div className="container">
      <Header />
      <main>
        <h2>Main Page</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quam eaque, labore porro quis rerum veniam veritatis alias, perspiciatis accusamus error. Doloremque est beatae expedita hic fugit eaque perspiciatis debitis.</p>
        <hr />

        <FetchCars />

      </main>
      <Footer name="Avinash" />
    </div>
  );
}