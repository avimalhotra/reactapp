import { useState, useEffect } from "react";

function Section() {

  const [users,setUsers]=useState([]);   
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);

  async function fetchApi(){

    // const url="https://jsonplaceholder.typicode.com/users";
    // https://fakestoreapi.com/products
    // const url='https://jsonplaceholder.typicode.com/photos';
    // const url='https://jsonplaceholder.typicode.com/albums/1/photos';
    const url='https://fakestoreapi.com/products';
    // https://www.weatherapi.com/weather

    try{
      setLoading(true);
      const res=await fetch(url);
      const data=await res.json();
      setUsers([...data]);  
    }
    catch(err){
      setError(err);
    }
    finally{
      setLoading(false);
    }
  }

  useEffect(()=>{ fetchApi() },[]);


  if(loading) return <div>Loading... <img src="loader.svg" alt="" /> </div>
  if(error) return <div>Error Found</div>

  return (
     <section className="my-3">
      <h2>Fake Store API </h2>
  
      <div className="row g-2">
      {
        users.map(elem=>(
          <div key={elem.id} className="col-lg-3 col-sm-6">
            <div className="card h-100">
              <img src={elem.image} alt="" className="img-resp" width={316} height={316} />
              <div className="card-body">
                <h3 title={elem.title} className="card-title">{elem.title}</h3>
                <h4 className="card-text"> {elem.category}</h4>
                <p className="card-text">Price: {elem.price}</p>
                <p className="card-text desc">{elem.description}</p>
                <p>Rating: {elem.rating.rate} <span className={ "ratings r-"+ Math.round(elem.rating.rate)}> <i>★</i> <i>★</i> <i>★</i> <i>★</i> <i>★</i> </span> </p>
                <p>Rating Count:  {elem.rating.count} </p>
              </div>
            </div>
          </div>
        ))
      }
      </div>
     </section>
  );
}

export default Section;