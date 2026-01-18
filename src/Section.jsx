import { useState } from "react";
import Child from "./Child";
import ErrorBoundary from "./ErrorBoundary";

function Section(){

  return (
     <section className="my-3">
      <h2>Section Component </h2>

      <ErrorBoundary>
          <Child />
      </ErrorBoundary>
      
     </section>

  );
}

export default Section;