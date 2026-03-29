import Fetch from "./FetchApi";

export default function GChild({car=""}){

      const {data,error,loading}=Fetch(`https://www.techaltum.com/node/api/${car}`);
          
          if(loading) return <p>Loading...</p>;
          if(error) return <p>Error {error}</p>;
     
     return (
          <section>
               <h3>Car Component</h3>
               <p>Name: {data.name}</p>
               <p>Power: {data.power}</p>
               <p>Price: {data.price}</p>
          </section>
     )
}