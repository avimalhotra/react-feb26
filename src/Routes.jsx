import { Route, Routes } from "react-router-dom";

import HomePage from "./Home";
import AboutPage from "./About";
import CoursesPage from "./Courses";
import CoursePage from "./Course";
import ContactPage from "./Contact";
import LoginPage from "./Login";
import NotFound from "./Error";

export default function Router(){
     return (
          <Routes>
               <Route path="/" element={<HomePage />}/>
               <Route path="/about" element={<AboutPage />}/>
               <Route path="/courses" element={<CoursesPage />}/>
               <Route path="/courses/:course" element={<CoursePage />}/>
               <Route path="/contact" element={<ContactPage />}/>
               <Route path="/login" element={<LoginPage />}/>
               <Route path="*" element={<NotFound />} />
          </Routes>
     )
}