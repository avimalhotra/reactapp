
function Section( ) {
  
  const cars = ['Toyota', 'Suzuki', 'Honda', 'Ford', 'BMW'];
  const car = { brand: 'Suzuki', model: 'Swift', power: 82, torque: 112, weight:920};
  const data=[
    {id:1, name:"swift", power:82, torque: 112, type: 'hatchback'},
    {id:2, name:"alto", power:66, torque: 90, type: 'hatchback'},
    {id:3, name:"baleno", power:90, torque: 113, type: 'hatchback'},
    {id:4, name:"brezza", power:102, torque: 139, type: 'suv'},
    {id:5, name:"ciaz", power:103, torque: 137, type: 'sedan'},
    {id:6, name:"jimny", power:105, torque: 138, type: 'suv'},
  ];


  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const even=nums.filter(i=>i%2==0);
  const odd=nums.filter(i=>i%2!=0);

  const hatchback=data.filter(i=>i.type=="hatchback");
  const suv=data.filter(i=>i.type=="suv");

  const sum=nums.reduce((x,y)=>x+y);
  console.log( sum );
  

    
  
  return (
     <section className="my-3">
      <h2>Section Component</h2>
      <p>Its a paragrapgh</p>
      <h2>Array</h2>
      <ol>
        {
          cars.map((elem,ind)=>(
            <li key={ind}>{elem}</li>
          ))
        }
      </ol>
      <hr />
      <h2>Object</h2>
      <table className="table table-bordered">
        <thead><tr><th>Property</th><th>Value</th></tr></thead>
        <tbody>
        {
          Object.entries(car).map(([key,val],ind)=>(
           <tr key={ind}><td>{key}</td><td>{val}</td></tr>
          ))
        }
        </tbody>
      </table>

      {/* {
        Object.entries(car).map(([i,j],ind)=>(
          <p key={ind}>{i}, {j}</p>
        ))
      } */}

      <hr />
      <h2>Array of Objects</h2>
      <table className="table table-bordered border-primary">
         <thead><tr><th>Id</th><th>Name</th><th>Power</th><th>Torque</th></tr></thead>
         <tbody>
      {
        data.map((key)=>(
            <tr key={key.id}><td>{key.id}</td><td>{key.name}</td><td>{key.power}</td><td>{key.torque}</td></tr>
        ))
      }
      </tbody>
      </table>
      <hr />
      <h2>Filter</h2>
      <ul>
        {hatchback.map((elem)=>(
          <li key={elem.id}>{elem.name}</li>
        ))}
      </ul>
  
      
     </section>
    
  );
}

export default Section;