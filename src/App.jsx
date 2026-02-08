import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function App() {

  const pi=3.14;
  const r=2;

  function sayHi(){ console.log("hello") };

  // function Nav(){ return <nav>nav</nav> }            // avoid    

  return (
    <div className="container">
      <Header />
      <main>
        <h2>Main Page</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quam eaque, labore porro quis rerum veniam veritatis alias, perspiciatis accusamus error. Doloremque est beatae expedita hic fugit eaque perspiciatis debitis.</p>
        <p>Area is : {pi*r*r} </p>

      <button className="btn btn-primary" onClick={sayHi}>Hello</button>

      </main>
      <Footer name="Avi" city="Noida" />
    </div>
  );
}