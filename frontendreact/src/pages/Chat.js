import axios from "axios";
import { useState } from "react";

function Chat() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    const token = localStorage.getItem("token");

    const res = await axios.post(
      "http://localhost/backend/public/api/chat",
      { message },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    setChat([...chat, { user: message, bot: res.data.response }]);
    setMessage("");
  };

  return (
    <div style={{ width: "600px", margin: "50px auto" }}>
      <h2 style={{ color:"#007bff" }}>Chatbot</h2>

      <div style={{ border:"1px solid #ccc", padding:"20px", height:"300px", overflowY:"scroll" }}>
        {chat.map((c, index) => (
          <div key={index}>
            <p><b>You:</b> {c.user}</p>
            <p style={{color:"#007bff"}}><b>Bot:</b> {c.bot}</p>
          </div>
        ))}
      </div>

      <input
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Type message..."
        style={{ width:"80%", padding:"10px" }}
      />
      <button onClick={sendMessage} style={{ width:"18%", marginLeft:"2%" }}>
        Send
      </button>
    </div>
  );
}

export default Chat;