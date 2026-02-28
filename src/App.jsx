import Header from "./Header";
import Footer from "./Footer";
import Course from "./Course";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { useState, useEffect } from "react";


export default function App(){
  
  const [count,setCount]=useState(0);
  const [count2,setCount2]=useState(0);
  const [seconds,setSeconds]=useState(0);

  // useEffect(()=>{
  //   if(count%5==0 && count!=0){ setCount2(count2+1) }
  // },[count]);

  useEffect(()=>{
    
    // console.log("done");

    const int=setInterval(()=>{
      setSeconds(prev=>prev+1);
    },1000);

    return ()=>{
      clearInterval(int);
    }

  },[])

  return (
    <div className="container">
      <Header />
      <main>
        <h2>Main Page</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quam eaque, labore porro quis rerum veniam veritatis alias, perspiciatis accusamus error. Doloremque est beatae expedita hic fugit eaque perspiciatis debitis.</p>
        <button className="btn btn-primary me-3" onClick={()=>setCount(count+1)}>Increase</button>
        <button className="btn btn-primary me-3" onClick={()=>setCount(count-1)}>Decrease</button>
        <button className="btn btn-primary me-3" onClick={()=>setCount(0)}>Reset</button>
        Count : <output>{count}</output>,
        Count 2 : <output>{count2}</output>,
        Seconds : <output>{seconds}</output>



      </main>
      <Footer name="Avinash" />
    </div>
  );
}