import { useState } from "react";


function useCounter(initialValue=0){
     const [count, setCount] = useState(initialValue);

     function inc(){ setCount(count+1) }
     function dec(){ setCount(count-1) }
     function reset(){ setCount(initialValue) }

     
     return {count, inc, dec, reset}

}

export default useCounter;