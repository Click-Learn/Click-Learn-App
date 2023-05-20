import { useSelector } from "react-redux";
import "./Chat.css";
import { BsFillSendFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { servicesFunctions } from "../../../../../Services/ServicesFunctions";
import { ChatModel } from "../../../../../Models/chatModel";
import Avatar from "@mui/material/Avatar";

const avatar1 = "https://img.freepik.com/free-photo/portrait-teenage-boy_23-2148105583.jpg?w=1380&t=st=1684585170~exp=1684585770~hmac=b4abeab810b9bf12b2a968dd7971ab32b953aee95f82eb5ee059d6636094bde3"
function Chat(): JSX.Element {
    const isLogin = useSelector((state: any) => state.authSlice);
    const [newMessage, setNewMessage] = useState<string>("");
    const [messages, setMessages] = useState([])

    useEffect(() => {
        servicesFunctions.getConversationChat().then((res) => {
            setMessages(res);
        })
    }, [])
    
    function sendNewMessage(){ 
        console.log(newMessage);
        servicesFunctions.sendChatMessageToChatGPT(newMessage);

        setNewMessage("");
        
    }
  return (
    <div className="Chat">
        <div className="chat_container">


    {messages && messages.map((m: ChatModel, index) => (
            <div key={m.id}>
                {m.role === 0 ? 
            <div className="Message">
              <div className="Avatar">
                <img src={avatar1} alt="Avatar" />
              </div>
              <div className="Content">
                <div className="Text">{m.message}</div>
                <div className="Time">{servicesFunctions.formatTimestamp(m.timestamp)}</div>
              </div>
            </div>
            :
            <div className="Message  align-right">
            <div className="Avatar">
              {/* <img src={isLogin.picture} alt="Avatar" /> */}
              <Avatar alt={isLogin.name} src={isLogin.picture} />

              
            </div>
            <div className="Content">
              <div className="Text">{m.message}</div>
              <div className="Time">10:30 AM</div>
            </div>
          </div>
            
            }

            </div>
    ))}
     
      <div className="chat__conversation-panel">
      <div className="chat__conversation-panel__container">
        <textarea
            onInput={(e: any) => setNewMessage(e.target.value)}
            value={newMessage}
          className="chat__conversation-panel__input panel-item"
          placeholder="Type a message..."
        ></textarea>
        <button className="chat__conversation-panel__button" onClick={sendNewMessage}>
          <BsFillSendFill
            style={{ fill: "var(--color-light-green)", fontSize: "25px" }}
          />
        </button>
      </div>
    </div>
      </div>
    </div>
  );
}

export default Chat;
