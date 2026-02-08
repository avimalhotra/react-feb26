export default function Footer(props){
     // console.log( props );                   // object
     
     return (
          <footer className="d-flex justify-content-between">
               <p>&copy; {new Date().getFullYear()} </p>
               <p>All rights reserved</p>
               {/* <p>Site By : Avi</p> */}
               <p>Site By : {props.name} from {props.city}</p>
          </footer>
     )
}