import { useEffect, useState } from "react";

export default function FetchCars(){
     const [data,setData]=useState([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);
     const [sort,setSort]=useState({key:null, direction:"asc"});

     // https://fakestoreapi.com/products
     // https://jsonplaceholder.typicode.com/users

     async function fetchData(){
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

     useEffect(()=>{ fetchData() },[]);

     function handleSort(key){
     
          let direction = 'asc';

          if (sort.key === key && sort.direction === 'asc') {
               direction = 'desc';
          }

          setSort({ key, direction });

          const sortedData = [...data].sort((a, b) => {
               if (a[key] < b[key]) {
                    return direction === 'asc' ? -1 : 1;
               }
               if (a[key] > b[key]) {
                    return direction === 'asc' ? 1 : -1;
               }
               return 0;
          });

          setData(sortedData);
          
     }

   
     if(loading) return <div><h3>Loading Data ......</h3></div>;
     if (error) return <div>Error: {error.message}</div>;

     return (
          <section>
               <h3>Cars Data</h3>
               <table className="table table-bordered border-primary fetchcars">
                    <thead>
                         <tr>
                              <th>S No</th>
                              <th >Name <button  onClick={()=>handleSort("name")} className="btn btn-outline-primary float-end">{sort.key === 'name' ? (sort.direction === 'asc' ? '↑' : '↓') : '↑↓'}</button></th>
                              <th>Type <button  onClick={()=>handleSort("type")} className="btn btn-outline-primary float-end">{sort.key === 'type' ? (sort.direction === 'asc' ? '↑' : '↓') : '↑↓'}</button></th>
                              <th>Price <button  onClick={()=>handleSort("price")} className="btn btn-outline-primary float-end">{sort.key === 'price' ? (sort.direction === 'asc' ? '↑' : '↓') : '↑↓'}</button></th>
                         </tr>
                    </thead>
                    <tbody>
                         {
                              data.map((elem,ind)=>(
                                   <tr key={ind}><td>{++ind}</td><td>{elem.name}</td><td>{elem.type}</td><td>{(elem.price).toLocaleString('en-in')}</td></tr>
                              ))
                         }
                    </tbody>
               </table>
          </section>
     )
}