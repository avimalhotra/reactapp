// import Card from "./Card";
import { useState } from "react";

function Section( prop ) {

    const [counter,setCounter]=useState(0);
    

    function sayHi(){ console.log("hello") }
    function sayBye(x){ console.log(`bye bye ${x}`) }

  return (
     <section className="my-3">
      <h2>Section Component</h2>
      <p>Its a paragrapgh</p>
      <p>Id: {prop.id}</p>

      <button className="btn btn-primary" onClick={sayHi}>Hello</button> 
      <button className="btn btn-primary ms-2" onClick={()=>sayBye('avi')}>Bye Bye</button> 
      <hr />
      <button className="btn btn-primary ms-2" onClick={()=>setCounter(counter=>counter-1)}>-1</button> 
      <button className="btn btn-primary ms-2" onClick={()=>setCounter(counter=>counter+1)}>+1</button> 
      <button className="btn btn-primary ms-2" onClick={()=>setCounter(counter=>counter+counter)}>2x</button> 
      <button className="btn btn-primary ms-2" onClick={()=>setCounter(0)}>0</button> 
      <b className="ms-2 d-inline-block">{counter}</b>
    
      
      {/* <div className="row">
        <div className="col-6">
          <Card price={82500} title="IPhone 17" cid={prop.id} />
        </div>
        <div className="col-6">
          <Card price={135000} title="Iphone 17 pro" cid={prop.id} />
        </div>
      </div> */}

      
     </section>
    
  );
}

export default Section;