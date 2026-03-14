import Header from "./Header";
import Footer from "./Footer";
import Course from "./Course";
// import FetchCars from "./FetchData";
import FetchUsers from "./Users";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function App(){
  
  return (
    <div className="container">
      <Header />
      <main>
        <h2>Main Page</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quam eaque, labore porro quis rerum veniam veritatis alias, perspiciatis accusamus error. Doloremque est beatae expedita hic fugit eaque perspiciatis debitis.</p>
        <hr />

        <FetchUsers />

      </main>
      <Footer name="Isha" />
    </div>
  );
}