import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [data, setData] = useState({ email:"", password:"" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost/backend/public/api/login", data);
    localStorage.setItem("token", res.data.token);
    navigate("/chat");
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email"
          onChange={e => setData({...data, email:e.target.value})} /><br /><br />
        <input type="password" placeholder="Password"
          onChange={e => setData({...data, password:e.target.value})} /><br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;