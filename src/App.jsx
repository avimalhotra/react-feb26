import Header from "./Header";
import Footer from "./Footer";
import Course from "./Course";
// import FetchCars from "./FetchData";
// import FetchUsers from "./Users";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
// import { useState } from "react";
// import Child from "./Child";
import { useReducer, useState, useMemo } from "react";

export default function App(){

  const initialState={ count:0 };

  function reducer(state,action){
      switch(action.type){
        case "inc": return {count: state.count + 1};
        case "dec": return {count: state.count - 1};
        case "reset": return {count: initialState.count};
        default:  return state;
      }
  }

  function Counter(){
    
    const [state,dispatch]=useReducer(reducer,initialState);

    return (
      <>
      <h3>useReducer</h3>
        <p>Initial value: {initialState.count}, Current value: {state.count}, </p>
        <button onClick={()=>dispatch({type:"inc"})} className="btn btn-outline-primary me-3">Increment</button>
        <button onClick={()=>dispatch({type:"dec"})} className="btn btn-outline-primary me-3">Decrement</button>
        <button onClick={()=>dispatch({type:"reset"})} className="btn btn-outline-primary">Reset</button>
      </>
    )

  }


  const [count,setCount]=useState(0);

  const expensiveTask=useMemo(()=>{
      let result=0;
      for(let i=0; i<1000000000; i++){ result+=i }
      return result;
  },[]);


  return (
    <div className="container">
      <Header />
      <main>
        <h2>Main Page</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quam eaque, labore porro quis rerum veniam veritatis alias, perspiciatis accusamus error. Doloremque est beatae expedita hic fugit eaque perspiciatis debitis.</p>
        <hr />

        <Counter />

        <hr />
        <h3>Use Memo</h3>
        <p>Count : {count}</p>
        <button className="btn btn-outline-primary" onClick={()=>setCount(count+1)}>Increment</button>
        <p>Expensive Calculation : {expensiveTask}</p>

       
      </main>
      <Footer name="Isha" />
    </div>
  );
}