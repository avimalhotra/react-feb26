import Header from "./Header";
import Footer from "./Footer";
import Course from "./Course";
import { useState } from "react";               
import Greet from "./Greets";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function App(){

  const cars = ['Toyota', 'Suzuki', 'Honda', 'Ford', 'BMW'];
  const car = { brand: 'Suzuki', model: 'Swift', power: 82, torque: 112, price: 900000};
  const data= [
                {"name": "swift", "type": "hatchback", "price":850000},
                {"name": "dzire", "type": "sedan", "price":980000},
                {"name": "ciaz", "type": "sedan", "price":1100000},
                {"name": "baleno", "type": "hatchback", "price":880000},
                {"name": "fronx", "type": "hatchback", "price":1150000},
                {"name": "brezza", "type": "suv", "price":1250000},
                {"name": "grand vitara", "type": "suv", "price":1990000},
                {"name": "invicto", "type": "mpv", "price":2990000},
                {"name": "alto", "type": "hatchback", "price":380000},
                {"name": "s presso", "type": "hatchback", "price":350000},
                {"name": "wagon r", "type": "hatchback", "price":500000},
                {"name": "jimny", "type": "suv", "price":1400000}
            ];
    
    const hatch=data.filter(elem=>elem.type=="hatchback");
    console.log(hatch);
    

   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   const even=numbers.filter((elem)=>elem%2==0);
   const sum=numbers.reduce((x,y)=>x+y);
   const boo=true;

  //  console.log( sum );
   
  //  console.log( even );


  const [counter,setCounter]=useState(0);       // 2


  return (
    <div className="container">
      <Header />
      <main>
        <h2>Main Page</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quam eaque, labore porro quis rerum veniam veritatis alias, perspiciatis accusamus error. Doloremque est beatae expedita hic fugit eaque perspiciatis debitis.</p>
       
        {/* <Course name="React" duration="4 months" num={pi} checkClick={handleClick} /> */}
        {/* <Course name="Angular" duration="3 months" num={pi} checkClick={handleClick}/> */}

        <hr />

        {/* 4 */}
        <button className="btn btn-outline-primary m-3" onClick={()=>setCounter(i=>i+1)}>Increment</button>
        <button className="btn btn-outline-primary m-3" onClick={()=>setCounter(i=>i-1)}>Decrement</button>
        <button className="btn btn-outline-primary m-3" onClick={()=>setCounter(i=>2*i)}>Double</button>
        <button className="btn btn-outline-primary m-3" onClick={()=>setCounter(i=>i*i)}>Exponential</button>
        <button className="btn btn-outline-primary m-3" onClick={()=>setCounter(0)}>Reset</button>
        {/* 3 */}
        <output>Counter: {counter}</output>

        <hr />

        <ul>
          {
            cars.map((car,ind)=>(
              <li key={ind}>{car}</li>
            ))
          }
        </ul>
        <ol>
          {
            Object.entries(car).map(([key,value]) => (
              <li key={key}>{key}: {value} </li>
            ))
          }
        </ol>

        <table className="table table-bordered">
          <thead className="table-dark"><tr><th>Name</th><th>Type</th><th>Price</th></tr></thead>
        <tbody>
          {
            data.map((elem)=>(
                <tr key={elem.name}><td>{elem.name}</td><td>{elem.type}</td><td>{elem.price}</td></tr>
            ))
          }
        </tbody>
        </table>

        <hr />

        <Greet check="Avi"></Greet>

        <p>{ (boo) ? "yes" : "no" }</p>


      </main>
      <Footer name="Avinash" />
    </div>
  );
}