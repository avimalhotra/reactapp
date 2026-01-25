import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Section from "./Section";
import Condition from "./Condition";
import Users from "./Users";
import UserProfile from "./User";

export default function App(){
     return (
          <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/contact" element={ <Contact /> } />
               <Route path="/section" element={ <Section /> } />
               <Route path="/login" element={ <Condition  /> } />
               <Route path="/users" element={ <Users  /> } />
               <Route path="/users/:user" element={ <UserProfile  /> } />
          </Routes>
     )
}