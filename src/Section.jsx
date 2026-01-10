import Child from "./Child";
import { useState } from "react";
import { useCallback } from "react";


function Section(){

  const [count,setCount]=useState(0);
  const x=10;

  // function handleClick(){setCount(count+1)}

  const handleClick=useCallback(()=>{
     setCount(count+1);
  },[count]);                         // dependency

  return (
     <section className="my-3">
      <h2>React Component </h2>
      <button className="btn btn-primary" onClick={handleClick}>Click</button>  Count : <output>{count}</output>
      
      <br />

     {/* <Child onClick={handleClick} /> */}

     </section>

  );
}

export default Section;