import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";
import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

const root = createRoot(document.getElementById("root"));

root.render(
  <div className="container">

    <BrowserRouter>
      {/* <Section /> */}
      <Header/>
      <Nav />
      <main>
        <Routes />
      </main>
      <Footer />  
    </BrowserRouter>  
    
  </div>
);
