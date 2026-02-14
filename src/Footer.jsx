export default function Footer(props){
          
     return (
          <footer className="d-flex justify-content-between p-3">
               <p>&copy; {new Date().getFullYear()} </p>
               <p>Site By : {props.name} </p>
          </footer>
     )
}