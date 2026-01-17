import { createPortal } from "react-dom";

function Modal({ children }) {
  const modalRoot = document.getElementById("popup");
  return createPortal(children, modalRoot);
}

export default Modal;