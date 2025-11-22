import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";

const root = createRoot(document.getElementById("root"));

function myFunc(){  return "hello there" }

root.render(
  <div className="container">

    <Header x={3} y={50}/>
  
    <Section y={myFunc} />

    <Footer />
    
  </div>
);
