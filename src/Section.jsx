import Condition from "./Condition";
import Day from "./Day";

function Section( {admin} ) {
  
    const hour=new Date().getHours();
    
    const x=2, y=3, z=4;

  return (
     <section className="my-3">
      <h2>Section Component</h2>
      <p>Hour: {hour} </p>
      
      <p>Good <Condition hr={hour} /></p>

      <hr />

      <h2> { (admin && hour==13) ? "Hello Admin" : "Hello User" } </h2> 

      <hr />
      
      <Day />

      <hr />

      <p>Triangle with sides {x}, {y}, {z} is <b> { ( x+y>z && x+z>y && y+z>x ) ? "valid" : "invalid" } </b></p>

  
     </section>
    
  );
}

export default Section;