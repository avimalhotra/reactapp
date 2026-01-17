import { createPortal } from "react-dom";

function Popup({children}){

     const root=document.getElementById("popup");

     return createPortal(children, root);
}


export default Popup;