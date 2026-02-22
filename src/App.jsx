import Header from "./Header";
import Footer from "./Footer";
import Course from "./Course";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { useState } from "react";

export default function App(){

  
  const [count,setCount]=useState(0);
  const [car,setCar]=useState({name:"***", power:0, torque:0});
  const [nums,setNums]=useState([1,2,3]);
  const [cars,setCars]=useState(["swift","polo","brezza","alto"]);
  const [check,setCheck]=useState(false);
  const [gender,setGender]=useState("");
  const [city,setCity]=useState("");


    function changeCarData(e){
      const {name,value}=e.target;
      setCar({...car, [name]:value });
    }    

    function updateNum(){
      setNums([...nums,nums.length+1])
    }
    function filterNums(){
      setNums(nums.filter(i=>i%2==0));
    }
    function deleteLastCar(){
      cars.pop();                 // remove last car
      setCars( [...cars] );      
    }

    function sayHi(name){
      console.log(`hello ${name}`)
    }

    function addCar(e){
      e.preventDefault();
      const data=e.target.car.value;

      setCars([...cars,data])
      
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
        <h2>Object</h2>
      <div className="row align-items-center">
        <div className="col-auto"><label htmlFor="cname" className="form-label">Car Name: </label></div>
        <div className="col-auto"><input type="text" id="cname" name="name" value={car.name} className="form-control" onChange={changeCarData} /></div>
        <div className="col-auto"><label htmlFor="power" className="form-label">Power: </label></div>
        <div className="col-auto"><input type="number" id="power" name="power" value={car.power} onChange={changeCarData} className="form-control" /></div> 
         <div className="col-auto"><label htmlFor="torque" className="form-label">Torque: </label></div>
        <div className="col-auto"><input type="number" id="torque" name="torque" value={car.torque} onChange={changeCarData} className="form-control" /></div> 
        <div className="col-auto">Name: {car.name}, power: {car.power}, torque: {car.torque}</div>
      </div>

      <hr />

      <h2>Array</h2>
      <button className="btn btn-primary me-3" onClick={updateNum}>Update</button>
      <button className="btn btn-primary me-3" onClick={filterNums}>Filter</button>
      {/* <p>{nums}</p> */}
    
      <ul>
        {
          nums.map((elem,ind)=>(
            <li key={ind}>{elem}</li>
          ))
        }
      </ul>

      <hr />

      <h3>Cars - To Do List</h3>
      <form className="row align-items-center" onSubmit={addCar}>
        <div className="col-auto"><label htmlFor="car" className="form-label">Car: </label></div>
        <div className="col-auto"><input type="text" name="car" id="car" required className="form-control" /></div>
        <div className="col-auto"><button type="submit" className="btn btn-primary">Add Car</button></div>
        <div className="col-auto"><button type="button" className="btn btn-primary" onClick={deleteLastCar}>Delete</button></div>
        
      </form>
      <ol>
        {
          cars.map((elem,ind)=>(
            <li key={ind}>{elem}</li>
          ))
        }
      </ol>

      <hr />

       <button className="btn btn-primary me-3" onClick={()=>sayHi("avi")}>Hello</button>
      

      <hr />
      <label><input type="checkbox" onChange={e=>setCheck(e.target.checked)} /> : Terms</label> 
      
      {/* <span>{check.toString()}</span> */}
      <span className="ms-3">{ (check) ? "agree" : "not agree" }</span>

      <hr />
      <label className="me-3"><input type="radio" name="gender" value="female" checked={gender==="female"} onChange={e=>setGender(e.target.value)} /> : Female</label>
      <label className="me-3"><input type="radio" name="gender" value="male" checked={gender==="male"} onChange={e=>setGender(e.target.value)}/> : Male</label>
      <span >{gender}</span>

      <hr />

      <label>City: <select value={city} onChange={e=>setCity(e.target.value)}>
          <option value="">--Choose City--</option>
          <option>New Delhi</option>
          <option>Chennai</option>
          <option>Mumbai</option>
          <option>Kolkata</option>
        </select> </label> <span>{city}</span>


      </main>
      <Footer name="Avinash" />
    </div>
  );
}