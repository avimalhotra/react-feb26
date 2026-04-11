export default function Footer(props){
          
     return (
          <footer className="bg-dark text-white d-flex justify-content-between p-3">
               <p className="m-0">&copy; {new Date().getFullYear()} </p>
               <p className="m-0">Site By : Avinash </p>
          </footer>
     )
}