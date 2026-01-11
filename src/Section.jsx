import Child from "./Child";
import { useState } from "react";
// import { useCallback } from "react";
import useCounter from "./useCounter";
import useFetch from "./useFetchApi";


function Section(){
   // const pi=3.14;

   const {data,loading,error}=useFetch("https://jsonplaceholder.typicode.com/users");

      if (loading) return <p className="alert alert-info">Loading...</p>;
      if (error) return <p className="alert alert-danger">Error: {error}</p>;

//   const [count,setCount]=useState(0);

//   function handleClick(){ setCount(count+1)}


   // const { count, inc, dec, reset }=useCounter(0);

  return (
     <section className="my-3">
      <h2>Section Component </h2>
      {/* <button className="btn btn-primary" onClick={handleClick}>Click</button>  Count : <output>{count}</output> */}

      <hr />

      {/* <button className="btn btn-primary m-2" onClick={inc}>+</button>
      <button className="btn btn-primary m-2" onClick={dec}>-</button>
      <button className="btn btn-primary m-2" onClick={reset}>Reset</button>
      <output>{count}</output> */}

      {/* <Child pi={pi} /> */}

      <h3>Fetch API</h3>
      <ul>
         {data.map((user) => (
         <li key={user.id}>{user.name}</li>
      ))}
      </ul>





     </section>

  );
}

export default Section;