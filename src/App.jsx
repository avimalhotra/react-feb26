import Header from "./Header";
import Footer from "./Footer";
import Course from "./Course";
// import FetchCars from "./FetchData";
// import FetchUsers from "./Users";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
// import { useState } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import Child from "./Child";

export default function App(){

  const user={name:"ipsum", id:25};

  
  const CourseContext=createContext();       // create context
  const ThemeContext=createContext();


  function CourseProvider(){
    const course={name:"React", version: 19, next:true };

    return (
      <CourseContext.Provider value={course}>
          <CourseDetails />
      </CourseContext.Provider>
    )

  }

  function CourseDetails(){
      const course=useContext(CourseContext);

      return (
        <>
          <p>Course: {course.name}</p>
          <p>Version: {course.version}</p>
          <p>Next JS: { (course.next) ? "Available" : "Not Available" }</p>
        </>
      )
  }


  function ThemeProvider(){

    const [theme,setTheme]=useState(localStorage.theme||"light");

    useEffect(()=>{
        document.documentElement.setAttribute("data-bs-theme",theme);
        localStorage.theme=theme;
    },[theme]);

    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
            <ThemeConsumer />
        </ThemeContext.Provider>
    )

  }

  function ThemeConsumer(){
      const {theme,setTheme}=useContext(ThemeContext);

      return (
        <>
          <h3>Theme: {theme}</h3>
          <button className="btn btn-primary" onClick={()=>setTheme( (theme=="light") ? "dark" :"light" )}>Toggle Theme</button>
        </>
      )
  }




  return (
    <div className="container">
      <Header />
      <main>
        <h2>Main Page</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quam eaque, labore porro quis rerum veniam veritatis alias, perspiciatis accusamus error. Doloremque est beatae expedita hic fugit eaque perspiciatis debitis.</p>
       <p>Name: {user.name}, id: {user.id}</p>
        <hr />

         <ThemeProvider />
        <hr />
       <Child user={user} />
          <hr />
       <CourseProvider />

      

      </main>
      <Footer name="Isha" />
    </div>
  );
}