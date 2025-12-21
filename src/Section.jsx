import { useState, useEffect } from "react";

function Section() {

  const [users,setUsers]=useState([]);   
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);

  async function fetchApi(){

    const url="https://jsonplaceholder.typicode.com/users";
    //  https://fakestoreapi.com/products
    // https://jsonplaceholder.typicode.com/photos

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

  function handleSort(id="id"){
      users.sort((x,y)=>{
          if(x[id]<y[id]){ return -1 }
          else{ return 1}
      });
      setUsers([...users]);  
  }


  if(loading) return <div>Loading... <img src="loader.svg" alt="" /> </div>
  if(error) return <div>Error Found</div>

  return (
     <section className="my-3">
      <h2>API </h2>
      
     <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <div style={{width:"8rem"}} className="d-flex align-items-center justify-content-between">
            <span>Id</span>
            <button onClick={()=>handleSort('id')} className="btn btn-sm btn-outline-primary float-end">↕</button>
          </div>
          </th>
        <th>
          <div className="d-flex align-items-center justify-content-between">
            <span>Name</span>
            <button onClick={()=>handleSort('name')} className="btn btn-sm btn-outline-primary float-end">↕</button>
          </div>
          </th>
          <th>
            <div className="d-flex align-items-center justify-content-between">
            <span>Userame</span>
            <button onClick={()=>handleSort('username')} className="btn btn-sm btn-outline-primary float-end">↕</button>
          </div>
          </th>
          <th>Phone</th>
          <th>Email</th>
          <th>Website</th>
          <th>Company</th>
          <th>City</th></tr>
      </thead>
      <tbody>
      {
      users.map((x)=>(
        <tr key={x.id}>
          <td>{x.id}</td>
          <td>{x.name} </td>
          <td>{x.username}</td>
          <td>{x.phone}</td>
          <td>{x.email}</td>
          <td><a href={"https://"+x.website} target="_blank">{x.website}</a></td>
          <td>{x.company.name}</td>
          <td>{x.address.city}</td>
          </tr>
      ))
      }
      </tbody>
      </table>

      
     </section>
    
  );
}

export default Section;