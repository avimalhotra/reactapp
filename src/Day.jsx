export default function Day(){

     const day=new Date().getDay();

     // let dayname;

     switch(day){
          // case 0 : dayname="Sunday"; break;
          // case 1 : dayname="Monday"; break;
          // case 2 : dayname="Tuesday"; break;
          // case 3 : dayname="Wednesday"; break;
          // case 4 : dayname="Thursday"; break;
          // case 5 : dayname="Friday"; break;
          // case 6 : dayname="Saturday"; break;
          // default : dayname="Invalid Day";
          case 0: return <h2>Sunday</h2>; 
          case 1: return <h2>Monday</h2>; 
          case 2: return <h2>Tuesday</h2>; 
          case 3: return <h2>Wednesday</h2>; 
          case 4: return <h2>Thursday</h2>; 
          case 5: return <h2>Friday</h2>; 
          case 6: return <h2>Saturday</h2>; 
      }

     //  return <h2>{dayname}</h2>
}