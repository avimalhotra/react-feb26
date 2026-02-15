export default function Greet({check}){
     if(check){
          return <h1>Checked</h1>
     }
     else{
          return <h1>Unchecked</h1>
     }
}