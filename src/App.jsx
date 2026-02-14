import Header from "./Header";
import Footer from "./Footer";
import Course from "./Course";
import { useState } from "react";               // 1

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function App() {

  const [counter,setCounter]=useState(0);       // 2

  const pi=3.14;
  const r=2;

  function handleClick(user){console.log(`Hello ${user}`)}

  return (
    <div className="container">
      <Header />
      <main>
        <h2>Main Page</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quam eaque, labore porro quis rerum veniam veritatis alias, perspiciatis accusamus error. Doloremque est beatae expedita hic fugit eaque perspiciatis debitis.</p>
        <p>Area is : {pi*r*r} </p>

        <Course name="React" duration="4 months" num={pi} checkClick={handleClick} />
        <Course name="Angular" duration="3 months" num={pi} checkClick={handleClick}/>

        <hr />

        {/* 4 */}
        <button className="btn btn-outline-primary m-3" onClick={()=>setCounter(i=>i+1)}>Increment</button>
        <button className="btn btn-outline-primary m-3" onClick={()=>setCounter(i=>i-1)}>Decrement</button>
        <button className="btn btn-outline-primary m-3" onClick={()=>setCounter(i=>2*i)}>Double</button>
        <button className="btn btn-outline-primary m-3" onClick={()=>setCounter(i=>i*i)}>Exponential</button>
        <button className="btn btn-outline-primary m-3" onClick={()=>setCounter(0)}>Reset</button>
        {/* 3 */}
        <output>Counter: {counter}</output>


      </main>
      <Footer name="Avinash" />
    </div>
  );
}