import { useState } from "react";

function Section() {

  const [count,setCount]=useState(0);
  const [x,setX]=useState(10);

  const [name,setName]=useState("");
  const [age,setAge]=useState(0);


  const [user,setUser]=useState({name:"lorem", age:10});
  /* multiple handler */
  // function changeName(name){setUser({...user,name})}
  // function changeAge(age){setUser({...user,age})}
  /* single handler */
  function changeUser(e){
    const {name,value}=e.target;
    setUser(prev=>({...prev, [name]:value }))
  }

  function handleClick(){
      // setX(x+1);
      // setX(x+2);
      setX(x=>x+1);
      setX(x=>x+2);
    }


  return (
     <section className="my-3">
      <h2>Section Component</h2>
      {/* <button className="btn btn-primary" onClick={()=>setCount(count+1)}>2</button> */}

      <button className="btn btn-primary" onClick={()=>setCount(count=>count-1)}>Decrement</button>
      <span className="mx-3">{count}</span>
      <button className="btn btn-primary" onClick={()=>setCount(count=>count+1)}>Increment</button>
      {/* <button className="btn btn-primary" onClick={()=>setCount(count=>count+count)}>Double</button> */}

      <hr />

      <button className="btn btn-primary" onClick={handleClick}>Change</button> <span>{x}</span>

      <hr />

      <label>Name: <input type="text" value={name} onInput={e=>setName(e.target.value)} /></label>
      <label>Age: <input type="number" value={age} onInput={e=>setAge(e.target.value)}/></label>
      <p>Name: {name}, Age: {age} </p>

      <hr />

      {/* <label>Name: <input type="text" value={user.name} onInput={e=>changeName(e.target.value)} /></label>
      <label>Age: <input type="number" value={user.age} onInput={e=>changeAge(e.target.value)} /></label>
      <p>Name: {user.name}, Age: {user.age} </p> */}

      <hr />

       <label>Name: <input type="text" name="name" value={user.name} onChange={changeUser} /></label>
      <label>Age: <input type="number" name="age" value={user.age} onChange={changeUser} /></label>
      <p>Name: {user.name}, Age: {user.age} </p>

  
     </section>
    
  );
}

export default Section;