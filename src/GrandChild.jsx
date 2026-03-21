export default function GChild({x}){
     console.log(x);
     
     return (
          <section>
               <h3>Grand Child Component</h3>
               <p>Name: {x.name}, id: {x.id}</p>
          </section>
     )
}