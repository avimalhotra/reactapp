import { memo } from "react";

const Child=memo(function({pi}){
     console.log("re rendered");
     return (
          <>
               <h3>Child Component</h3>
               <p>PI: {pi}</p>
               {/* <p>Counter: {x}</p> */}
          </>
     )
});

export default Child;