import Header from "./Header";
import Footer from "./Footer";
import Course from "./Course";
// import FetchCars from "./FetchData";
// import FetchUsers from "./Users";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
// import { useState } from "react";
import Child from "./Child";
import GChild from "./GrandChild";

import Counter from "./Counter";
import Fetch from "./FetchApi";

export default function App(){

  const {count,increment,decrement,reset}=Counter(0);
  const {data,error,loading}=Fetch('https://jsonplaceholder.typicode.com/users');

  if(loading) return <p>Loading...</p>;
  if(error) return <p>Error {error}</p>;

  return (
    <div className="container">
      <Header />
      <main>
        <h2>Main Page</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quam eaque, labore porro quis rerum veniam veritatis alias, perspiciatis accusamus error. Doloremque est beatae expedita hic fugit eaque perspiciatis debitis.</p>

        <button className="btn btn-outline-primary m-3" onClick={increment}>Increment</button>
        <button className="btn btn-outline-primary m-3" onClick={decrement}>Decrement</button>
        <button className="btn btn-outline-primary m-3" onClick={reset}>Reset</button>
        <span>{count}</span>
        <hr />
        <h2>Cards</h2>
        <div className="row">
        {
            data.map((res)=>(
              <div className="col-6" key={res.id}>
                <div className="card mb-3">
                  <div className="card-body">
                    <p> ID: {res.id}</p>
                    <h3 className="card-title">{res.name}</h3>
                    <div className="card-subtitle">{res.username}</div>
                    <p>EMAIL: {res.email} </p>
                    <p>Phone: {res.phone} </p>
                  </div>
                </div>
              </div>
            ))
        }
        </div>
         <hr />
        <Child></Child>
        <hr />
        <GChild car="alto"></GChild>
        <GChild car="swift"></GChild>

      
      </main>
      <Footer name="Isha" />
    </div>
  );
}