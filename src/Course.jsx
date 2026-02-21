export default function Course({name,duration=0,num, checkClick}){
          
     return (
          <section className="card mb-3">
               <div className="card-body">
               <h2>{name} Course </h2>
               <p>Course duration: {duration}</p>
               <p>Course details</p>
               <p>{num}</p>
               <button className="btn btn-primary" onClick={()=>checkClick(name)}>Click</button>
               </div>
          </section>
     )
}