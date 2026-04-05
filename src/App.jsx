import React  from "react";
import { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";

import Header from "./Header";
import Footer from "./Footer";
import Course from "./Course";


import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Child from "./Child";

// import FetchCars from "./FetchData";
const Cars=React.lazy( ()=>import('./FetchData') );

export default function App(){


return (
  <React.StrictMode>

<ErrorBoundary>
    <div className="container">
      <Header />
      <main>
        <h2>Main Page</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quam eaque, labore porro quis rerum veniam veritatis alias, perspiciatis accusamus error. Doloremque est beatae expedita hic fugit eaque perspiciatis debitis.</p>

        <hr />

        <Child />

        <hr />
        
        

        <Suspense fallback={ <div className="d-flex justify-content-center align-items-center"> 
          <img src="loader.svg" alt="" width={60} height={60} /> 
          <h2>Fetching Cars data, please wait</h2> </div>}>

          <Cars />
        </Suspense>
      
      </main>
      <Footer name="Isha" />
    </div>
    </ErrorBoundary>

    </React.StrictMode>
  );
}