import React, {Suspense} from "react";
import { useState } from "react";
// import Child from "./Child";

const Child=React.lazy(()=>import('./Child'));

function Section(){

  return (
     <section className="my-3">
      <h2>Section Component </h2>

      {/* <Child></Child> */}

      <Suspense fallback={<p>Loading Child Component</p>}>
        <Child />
      </Suspense>
 
     </section>

  );
}

export default Section;