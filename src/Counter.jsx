import { useState } from "react";

export default function Counter(init=0){
     
     const [count,setCount]=useState(init);

     function increment(){ setCount(count+1) };
     function decrement(){ setCount(count-1) };
     function reset(){ setCount(init) };

     return { count, increment, decrement, reset};

}