import GChild from "./GrandChild"

export default function Child({user}){


     return (
          <section>
               <h2>Child Component</h2>
               <p>Name: {user.name}, id: { user.id }</p>
               <hr />
               <GChild x={user} />
          </section>
     )
}