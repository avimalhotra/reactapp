import { createRoot } from "react-dom/client";
import "./style.css";

const root = createRoot(document.getElementById("root"));
const version = 19.2;

root.render(
  <div className="container">
    <h1 id="p1">Hello React {version}</h1>
    <p>Paragraph {2 + 3}</p>
    <p>
      <strong>Date</strong> : {new Date().toLocaleString()}
    </p>
  </div>
);
