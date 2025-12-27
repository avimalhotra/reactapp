export default function Sec1({counter,setCounter}){
     return (
          <>
               <h3>Sec 1</h3>
               <button className="btn btn-secondary" onClick={()=>setCounter(counter+1)}>Click</button>
               <p>Count : {counter}</p>
          </>
     )
}