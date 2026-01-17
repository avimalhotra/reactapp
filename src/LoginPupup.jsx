import { useState } from "react";
import Popup from "./Popup";

export default function LoginPopup() {

    const [open,setOpen]=useState(false);

  return (
    <>
      <h2>Login Popup</h2>
      <button className="btn btn-primary" onClick={()=>setOpen(true)}>Open Popup</button>

      {
          open && 
          <Popup>
               <div className="overlay">
                     <div className="model">
                         <button className="btn btn-danger float-end" onClick={()=>setOpen(false)}>Close</button>
                         <h3>Login Popup </h3>
                         <form>
                              <label>Email: <input type="text" /></label>
                              <label>Password: <input type="password" /></label>
                              <button className="btn btn-outline-primary">Signup</button>
                         </form>
                    </div>
               </div>
          </Popup>
      }

    </>
  );
}