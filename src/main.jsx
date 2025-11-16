import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Section from "./Section";

const root = createRoot(document.getElementById("root"));

/* function Section() {
  return (
    <section>
      <h2>Section Name</h2>
      <p>Lorem ipsum dolor sit amet.</p>
    </section>
  );
} */

root.render(
  <div className="container">
    <h1>Hello React</h1>
    <p>Paragraph </p>
    <hr />
    <Section />
  </div>
);
