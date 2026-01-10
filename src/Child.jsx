export default function Child(prop){
     // console.log(prop);
     return (
          <>
               <h3>Child Component</h3>
               <button className="btn btn-primary" onClick={prop.onClick}>Click</button>
          </>
     )
}