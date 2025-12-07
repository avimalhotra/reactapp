import { use, useState } from "react";

function Section() {

  // const [user,setUser]=useState({name:"", email:'', age:0, terms:false});
  const [user,setUser]=useState({name:"", email:'', age:0});

  const [cars,setCars]=useState([]);

 
  function changeUser(e){

      const key= e.target.name;
      const value= e.target.value;
      // const check= e.target.checked;
      
    setUser({...user, [key]:value});

    // if(e.target.name=="terms"){
    //   setUser({...user, [key]:check});
    // }
    // else{
    //   setUser({...user, [key]:value});
    // }

  }

  function updateCars(e){
    e.preventDefault();    
    setCars([...cars,e.target.query.value ]);
  }

  function deleteCar(e){
    setCars(cars.filter(i=>i!=e.target.title));
  }


  return (
     <section className="my-3">
      <h2>Section Component</h2>


      <label>Name: <input type="text" name="name" value={user.name} onChange={changeUser} /></label>
      <label>Email: <input type="email" name="email" value={user.email} onChange={changeUser} /></label>
      <label>Age: <input type="number" name="age" value={user.age} onChange={changeUser} /></label>
      <p>Name: {user.name}</p>
      <p> Email: {user.email}</p>
      <p> Age: {user.age}</p>
      {/* <p> Terms: {user.terms}  </p> */}

    <hr />

    <h2>To Do List</h2>
    <form className="row align-items-center" onSubmit={updateCars}>
      <div className="col-auto"><label htmlFor="car" className="form-label">Car:</label></div>
      <div className="col-auto"><input type="text" id="car" name="query" required className="form-control" /></div>
      <div className="col-auto"><button className="btn btn-primary">Add</button></div>
    </form>

    <ol className="my-3">
      { cars.map((elem,ind)=>(
        <li className="my-3" key={ind}>{elem} <button title={elem} onClick={deleteCar} className="btn btn-danger btn-sm float-end">delete</button> </li>
      )) }
    </ol>
    <hr />
   
     </section>
    
  );
}

export default Section;