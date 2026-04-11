import { Link } from "react-router-dom"

export default function CoursesPage(){
     return (
          <>
               <h2>Courses Available</h2>

               <p>At Tech Altum, we have following Courses: </p>
               <ol>
                    <li><Link to="/courses/react">React</Link></li>
                    <li><Link to="/courses/angular">Angular</Link></li>
                    <li><Link to="/courses/node">Node JS</Link></li>
               </ol>
          </>
     )
}