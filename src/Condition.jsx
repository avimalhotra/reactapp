export default function Condition({hr}){
     
     if(hr<12){ return <b>Morning</b> }
     else if(hr<16){ return <b>Afternoon</b> }
     else if(hr<20){ return <b>Evening</b> }
     else{ return <b>Night</b> }
     
}