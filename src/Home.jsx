import { useNavigate } from "react-router-dom"

export default function Home(){
     const navigate=useNavigate();

     function handleLogin(){
          navigate("/login");
     }

     return (
          <>
               <h2>Home Component</h2>
               <p>Paragraph for home Component</p>
               <button className="btn btn-primary" onClick={handleLogin}>Check Day</button>
          </>
     )
}