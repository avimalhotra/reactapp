import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";
import LoginPopup from "./LoginPupup";

const root = createRoot(document.getElementById("root"));

root.render(
  <div className="container">

    <Header/>
  
    <Section />

    {/* <LoginPopup /> */}

    <Footer />    
    
  </div>
);
