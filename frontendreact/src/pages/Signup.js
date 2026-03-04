import axios from "axios";
import { useState } from "react";

function Signup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost/backend/public/api/signup", data);
    alert("Account created");
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name"
          onChange={e => setData({...data, name:e.target.value})} /><br /><br />
        <input type="email" placeholder="Email"
          onChange={e => setData({...data, email:e.target.value})} /><br /><br />
        <input type="password" placeholder="Password"
          onChange={e => setData({...data, password:e.target.value})} /><br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Signup;