import { useState, useEffect } from "react";

function Section() {

  const [count, setCount]=useState(0);
  const [second, setSecond]=useState(0);
  // const [count2, setCount2]=useState(0);

  function changeCount(){ 
    setCount(count=>count+1);
    // if(count%5==0 && count!=0){ setCount2(count2=>count2+1) }
   }

  // useEffect(()=>{
  //   console.log("use effect", count, count2);
  //   // document.title=`Clicked ${count} times`;
  // },[count2]);


  // useEffect(()=>{

  //     const intid=setInterval(()=>{
  //         setSecond(second=>second+1);
  //     },1000);      

  //     return ()=>{ clearInterval(intid) }

  // },[]);


  async function fetchApi(){
    const url="https://jsonplaceholder.typicode.com/users";

    try{
      const res=await fetch(url);
      const data=await res.json();
      console.table( data );
    }
    catch(err){
      console.warn(err);
    }
    
  }


  useEffect(()=>{

    // fetch("https://jsonplaceholder.typicode.com/users").then(i=>i.json()).then(i=>console.log(i)).catch(e=>console.warn(e));

    // fetchApi();

   },[]);


  return (
     <section className="my-3">
      <h2>Section Component</h2>
      <button className="btn btn-primary" onClick={changeCount}>Change</button> 
      <p>Count 1: <output>{count}</output></p>
      {/* <p>Count 2: <output>{count2}</output></p> */}

      <hr />

      {/* <p>{second}</p> */}

      
     </section>
    
  );
}

export default Section;