import { useEffect, useState } from "react";

export default function FetchCars(){
     const [data,setData]=useState([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);
     // const [sort,setSort]=useState({key:null, direction:"asc"});
     

     async function  fetchData(){
          try{
               setLoading(true);
               const res= await fetch("https://www.techaltum.com/node/api");
               if (!res.ok) { throw new Error(`error: ${res.status}`);}
               const data=await res.json();
               setData(data);  
               setError(null);  
          }
          catch(err){
               console.warn(err.message);
               setError(err);
          }
          finally{
               setLoading(false);
          }
     }

     useEffect(()=>{  fetchData() },[]);


     // function handleSort(key){
     //      console.log(key);

     //      if(key=="id"){
     //           setData(data);
     //      }
     //      else if(key=="name"){
     //           const sortedData=data.sort((a,b)=>{
     //                if(a.name>b.name){ return 1 }
     //                else{ return -1 }
     //           });
              
     //           setData(sortedData);
     //      }
          
     // }

     if(loading) return <div><h3>Loading Data ......</h3></div>;
     if (error) return <div>Error: {error.message}</div>;

     return (
          <section>
               <h3>Cars Data</h3>
               <table className="table table-bordered">
                    <thead>
                         <tr>
                              <th>S No</th>
                              <th>Name</th>
                              <th>Type</th>
                              <th>Price</th>
                         </tr>
                    </thead>
                    <tbody>
                         {
                              data.map((elem,ind)=>(
                                   <tr key={ind}><td>{++ind}</td><td>{elem.name}</td><td>{elem.type}</td><td>{elem.price}</td></tr>
                              ))
                         }
                    </tbody>
               </table>
          </section>
     )
}