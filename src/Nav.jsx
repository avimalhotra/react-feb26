import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NavBar(){
     
     const navigate=useNavigate();

     function loginPage(){
          navigate("/login");
     }

     return (
          <nav className="bg-secondary-subtle p-2 d-flex justify-content-between">
               <ul className="d-flex list-unstyled m-0">
                    <li className="me-2"><Link className="d-block px-3 py-1" to="/">Home</Link></li>
                    <li className="me-2"><Link className="d-block px-3 py-1" to="/about">About</Link></li>
                    <li className="me-2"><Link className="d-block px-3 py-1" to="/courses">Courses</Link></li>
                    <li className="me-2"><Link className="d-block px-3 py-1" to="/contact">Contact Us</Link></li>
               </ul>
               <button className="btn btn-outline-primary" onClick={loginPage}>Login</button>
          </nav>
     )
}