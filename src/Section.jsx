import { createContext, useContext} from "react";
 
// 1. Create Context
const CreateContext=createContext();
 
// 2. provide Context
function AppProvider(){
  const car={name:"swift", power:82, price:900000};

  return (
    <CreateContext.Provider value={car}>
      <CarDetails />
    </CreateContext.Provider>
  );

}

// 3. consume Context

function CarDetails(){
  const car=useContext(CreateContext);
  return (
    <section className="card">
      <div className="card-body">
        <h3>Car Details</h3>
        <p>Name: {car.name}</p>
        <p>Power: {car.power}</p>
        <p>Price: {car.price}</p>
      </div>
    </section>
  )
}


function Section() {

const items = [{ price: 10 }, { price: 20 }, { price: 30 }];
const totalp=items.reduce((a,b)=>a+b.price,0);
const avgp=items.reduce((a,b)=>a+b.price,0)/items.length;


  return (
     <section className="my-3">
      <h2>React Component </h2>

      <p>Total: {totalp}, avg: {avgp}</p>

      <hr />

      <AppProvider />

     </section>
  );
}

export default Section;