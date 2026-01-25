import { useParams } from "react-router-dom";

function UserProfile() {
  const { user } = useParams();
  return <h2>User Profile : {user}</h2>;
}
  
export default UserProfile;
