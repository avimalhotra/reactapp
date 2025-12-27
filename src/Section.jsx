import { useState, useEffect, useRef } from "react";
import Sec1 from "./Sec1";
import Sec2 from "./Sec2";

function Section() {

  const [count,setCount]=useState(0);
  const ref=useRef(0);  
  // ref.current=ref.current+1;
  // const inputRef=useRef(0);  

  function changeRef(){setCount(count=>count+1);}

  // function changeFocus(){inputRef.current.focus();}

const items = [{ price: 10 }, { price: 20 }, { price: 30 }];
// const total = items.reduce((sum, item) => sum + item.price, 0);
// console.log(total); // 60



  useEffect(()=>{
    ref.current=count;
  },[count]);

  return (
     <section className="my-3">
      <h2>React Component </h2>
      <p>Ref: {ref.current}, Count: {count}</p>
      <button className="btn btn-primary" onClick={changeRef}>Click</button>
      <hr />

      {/* <input type="text" ref={inputRef} />
      <button className="btn btn-primary" onClick={changeFocus}>Click</button> */}

      <hr />

      <button className="btn btn-primary" onClick={()=>setCount(count+1)}>Change</button>

      <span>Prev: {ref.current}</span>
      <span>Current: {count}</span>

      <hr />

      <Sec1 counter={count} setCounter={setCount} />
      <Sec2 counter={count} setCounter={setCount}/>

     </section>
  );
}

export default Section;