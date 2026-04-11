import React  from "react";

import { BrowserRouter } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import Router from "./Routes";
import NavBar from "./Nav";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function App(){

return (
  <BrowserRouter>
    <div className="container">
      <Header />
      <NavBar />
      <main className="p-3">
          <Router />
      </main>
      <Footer />
    </div>
    </BrowserRouter>
  );
}