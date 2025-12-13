import { useState } from "react";

function Section() {

  function sayHi(user){ console.log(`hi ${user}`)}

  const [name,setName]=useState("");
  const [age,setAge]=useState(0);
  const [check,setCheck]=useState(false);
  const [gender,setGender]=useState("");
  const [city,setCity]=useState("");

  // function changeName(e){ setName(e.target.value) }
  // function changeAge(e){ setAge(e.target.value) }

  function sendForm(e){
    e.preventDefault();
    console.log( e.target.name.value, e.target.age.value, e.target.terms.checked, e.target.gender.value, e.target.city.value  ); 
  }

  // function showVal(e){ console.log(e.target.value)}
 
  return (
     <section className="my-3">
      <h2>Section Component</h2>

        {/* <input type="range" min={0} max={100} onChange={showVal} /> */}

      {/* <button className="btn btn-primary" onClick={sayHi}>Button</button> */}
      <button className="btn btn-primary" onClick={()=>sayHi('avi')}>Button</button>

      <hr />

    <form className="row align-items-center" onSubmit={sendForm}>
      <div className="col-auto"><label htmlFor="name" className="form-label">Name:</label></div>
      {/* <div className="col-auto"><input type="text" name="name" id="name" value={name} onChange={changeName} required className="form-control" /></div> */}
      <div className="col-auto"><input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} required className="form-control" /></div>
      <div className="col-auto"><label htmlFor="age" className="form-label">Age:</label></div>
      {/* <div className="col-auto"><input type="number"id="age" name="age" onChange={changeAge}  required className="form-control" /></div> */}
      <div className="col-auto"><input type="number"id="age" name="age" onChange={(e)=>setAge(e.target.value)}  required className="form-control" /></div>
      <div className="col-auto"> <label><input name="terms" checked={check} onChange={e=>setCheck(e.target.checked)} type="checkbox" /> : Terms</label> </div>
      <div className="col-auto"> 
        <label><input type="radio" name="gender" value="Female" checked={gender==="Female"} onChange={e=>setGender(e.target.value)} /> : Female</label>
        <label><input type="radio" name="gender" value="Male" checked={gender==="Male"} onChange={e=>setGender(e.target.value)} /> : Male</label>
        </div>

      <div className="col-auto"><label htmlFor="city" className="form-label">City:</label></div>
      <div className="col-auto">
        <select id="city" className="form-select" name="city" onChange={e=>setCity(e.target.value)}>
          <option disabled selected value="" >--Choose City--</option>
          <option>New Delhi</option>
          <option>Chennai</option>
          </select>
        </div>


      <div className="col-auto"><button className="btn btn-primary">Send</button></div>
    </form>

    <p>Name: {name}</p>
    <p>Age: {age}</p>
    {/* <p>Checked: {check.toString()} </p> */}
    <p>Checked: { (check) ? "Agree" : "Not Agree" } </p>
    <p>Gender: {gender}</p>
    <p>City: {city}</p>
  
     </section>
    
  );
}

export default Section;