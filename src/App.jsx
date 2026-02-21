import Header from "./Header";
import Footer from "./Footer";
import Course from "./Course";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { useState } from "react";

export default function App(){

    // console.log("Hello react");

    const [count,setCount]=useState(0);
    const [name,setName]=useState("");
    const [age,setAge]=useState(0);
    const [car,setCar]=useState({name:"", power:0, torque:0});
    const [cars,setCars]=useState(["swift","brezza"]);
    
    console.log(car);
    

    function handleClick(){
      // setCount(count+1);
      // setCount(count+2);
      // setCount(count+5);
      setCount(count=>count+1);
      setCount(count=>count+2);
    }

    function changeCar(){ 
        // setCar({power:82});    
        // setCar({...car, power:82, torque:112});    
    }

    function changeCarData(e){
      const {name,value}=e.target;
      // console.log(e.target.name, e.target.value);
      
      setCar({...car, [name]:value });
    }    

    
  return (
    <div className="container">
      <Header />
      <main>
        <h2>Main Page</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quam eaque, labore porro quis rerum veniam veritatis alias, perspiciatis accusamus error. Doloremque est beatae expedita hic fugit eaque perspiciatis debitis.</p>
        <button className="btn btn-primary me-3" onClick={()=>setCount(count+1)}>Increase</button>
        <button className="btn btn-primary me-3" onClick={()=>setCount(count-1)}>Decrease</button>
        <button className="btn btn-primary me-3" onClick={()=>setCount(0)}>Reset</button>
        <output>{count}</output>

        <hr />
        <button className="btn btn-secondary" onClick={handleClick}>Change</button>

        <hr />

      <div className="row align-items-center">
        <div className="col-auto"><label htmlFor="name" className="form-label">Name: </label></div>
        <div className="col-auto"><input type="text" id="name" value={name} className="form-control" onChange={e=>setName(e.target.value)} /></div>
        <div className="col-auto"><label htmlFor="age" className="form-label">Age: </label></div>
        <div className="col-auto"><input type="number" id="age" value={age} onChange={e=>setAge(e.target.valueAsNumber)} className="form-control" min={20} max={35} /></div>
      </div>
      <div className="my-3"> Name: <output>{name}</output>, Age: <output>{age}</output></div>
      <hr />

     <button className="btn btn-outline-success" onClick={changeCar}>Change</button>
      <hr />

      <div className="row align-items-center">
        <div className="col-auto"><label htmlFor="cname" className="form-label">Car Name: </label></div>
        <div className="col-auto"><input type="text" id="cname" name="name" value={car.name} className="form-control" onChange={changeCarData} /></div>
        <div className="col-auto"><label htmlFor="power" className="form-label">Power: </label></div>
        <div className="col-auto"><input type="number" id="power" name="power" value={car.power} onChange={changeCarData} className="form-control" /></div> 
         <div className="col-auto"><label htmlFor="torque" className="form-label">Torque: </label></div>
        <div className="col-auto"><input type="number" id="torque" name="torque" value={car.torque} onChange={changeCarData} className="form-control" /></div> 
        <div className="col-auto">Name: {car.name}, power: {car.power}, torque: {car.torque}</div>
      </div>


      </main>
      <Footer name="Avinash" />
    </div>
  );
}