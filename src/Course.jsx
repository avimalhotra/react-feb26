import { useRef } from "react"

export default function Course({name="",duration=0,nodeversion}){
     
     const ref=useRef(0);     
     const input1=useRef("");
     const input2=useRef("");
     const data=[
          {id:1, name:"swift", price:800000},
          {id:2, name:"baleno", price:900000},
          {id:3, name:"brezza", price:1300000},
          {id:4, name:"grand vitara", price:1600000},
     ];

     // const total=data.reduce( (x,y)=>x + y.price,0 );
     
     
     function changeRef(){
          console.log(ref.current);
          ref.current++;
     }

     function focusInput(){
          input2.current.focus();
     }

     return (
          <section className="card mb-3">
               <div className="card-body">
               <h2>{name} Course </h2>
               <p>Course duration: {duration}</p>
               <p>Prerequisite: Install Node JS {nodeversion} </p>
               <p>Course details here</p>
               {/* <p>Initial Ref: {ref.current}, <button onClick={changeRef}>Change</button></p>
               <hr />
               <input type="text" ref={input1} />
               <input type="text" ref={input2} />
               <button onClick={focusInput}>Focus</button> */}
               </div>
          </section>
     )
}