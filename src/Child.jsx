import { memo } from "react";
// import Counter from "./Counter";
import Fetch from "./FetchApi";

const Child = memo(function ({name}){

     // const {count,increment,decrement,reset}=Counter(-10);
      const {data,error,loading}=Fetch('https://www.techaltum.com/node/api');
     
       if(loading) return <p>Loading...</p>;
       if(error) return <p>Error {error}</p>;

     return (
          <section>
               <h2>Child Component</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur est libero culpa obcaecati vel commodi illum officia eveniet, animi id ullam magnam natus quaerat! Doloribus accusamus illo pariatur numquam aut!</p>

               {/* <button className="btn btn-outline-primary m-3" onClick={increment}>Increment</button>
               <button className="btn btn-outline-primary m-3" onClick={decrement}>Decrement</button>
               <button className="btn btn-outline-primary m-3" onClick={reset}>Reset</button>
               <span>{count}</span> */}

               <hr />

               <table className="table table-bordered">
                    <thead><tr><th>S No</th><th>Name</th><th>Type</th><th>Price</th></tr></thead>
                    <tbody>
                         {
                              data.map((car,ind)=>(
                                   <tr key={ind}><td>{++ind}</td><td>{car.name}</td><td>{car.type}</td><td>{car.price}</td></tr>
                              ))
                         }
                    </tbody>
               </table>
               
               
          </section>
     )
});

export default Child;