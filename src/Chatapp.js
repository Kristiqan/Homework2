import "./Chatapp.css";
import { useState } from "react";

function Chatapp() {
  const [input,setInput] = useState("");
 
 

  const handleInput = () => {
    
    document.querySelector("#message1").innerHTML=input;
    document.querySelector("#message2").innerHTML="Typing...";
      setTimeout(() => {
        document.querySelector("#message2").innerHTML="ok";
        setInput("");
      }, 3000);
    
  };
  return (
    <div className="Chatapp">
      <div className="wrapper">
        <div className="content">
          <div className="header">
            <div className="right">
              <div className="name">Chat</div>
            </div>
          </div>
          <div className="main">
            <div className="main_content">
              <div className="messages">
                <div
                  className="bot-message"
                  id="message1"
                ></div>
                <div
                  className="human-message"
                  id="message2"
                ></div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="btm">
              <div className="input">
              <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} className="input"/>
              </div>
              <div className="btn">
                <button onClick={handleInput}>
                  <i className="fas fa-paper-plane"></i>Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatapp;
