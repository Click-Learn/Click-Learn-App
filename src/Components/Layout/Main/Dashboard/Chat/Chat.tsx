import { useSelector } from "react-redux";
import "./Chat.css";
import { BsFillSendFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { servicesFunctions } from "../../../../../Services/ServicesFunctions";
import { ChatModel } from "../../../../../Models/chatModel";
import Avatar from "@mui/material/Avatar";

const avatar1 = "https://img.freepik.com/free-photo/portrait-teenage-boy_23-2148105583.jpg?w=1380&t=st=1684585170~exp=1684585770~hmac=b4abeab810b9bf12b2a968dd7971ab32b953aee95f82eb5ee059d6636094bde3"
function Chat(): JSX.Element {
    const isLogin = useSelector((state: any) => state.authSlice);
    const [newMessage, setNewMessage] = useState<string>("");
    const [messages, setMessages] = useState<ChatModel[]>([])
    const [refresh, setRefresh] = useState<boolean>(true)
    const chatContainerRef = useRef<null | HTMLDivElement>(null);

    
    useEffect(() => {
        servicesFunctions.getConversationChat().then((res) => {
            setMessages(res);
        })
    }, [refresh])

    useEffect(() => {
        scrollToBottom();
    }, [messages])
    
    function scrollToBottom() {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }
    
    function sendNewMessage(){ 
        console.log(newMessage);
        const newChatModel: ChatModel = {
            id: 99999999,
            message: newMessage,
            timestamp: new Date().getTime().toString(),
            role: 1,
          };
          
          let updatedMessages: ChatModel[] = [...messages];
          updatedMessages.push(newChatModel);
          setMessages(updatedMessages);
          
          
          setTimeout(() => {
            const AITypingMessage: ChatModel = {
                id: 10000000,
                message: "Typing",
                timestamp: "",
                role: 0,
              };
              let updatedMessages2: ChatModel[] = [...updatedMessages];
              updatedMessages2.push(AITypingMessage);
              setMessages(updatedMessages2);
          }, 300);

        servicesFunctions.sendChatMessageToChatGPT(newMessage).then(() => {
            setRefresh(!refresh)
        });

        setNewMessage("");
        
    }
  return (
    <div className="Chat">
        <div className="chat_container" ref={chatContainerRef} >


    {messages && messages.map((m: ChatModel) => (
            <div key={m.id} >
                {m.role === 0 ? 
                    <div className={m.message === "Typing" ? "Message typing" : "Message"}>
                    <div className="Avatar">
                        <img src={avatar1} alt="Avatar" />
                    </div>
                    <div className="Content">
                        <div className="Text">{m.message}</div>
                        <div className={m.message === "Typing" ? "Time hidden" : "Time"}>
                        {servicesFunctions.formatTimestamp(m.timestamp)}
                        </div>
                    </div>
                    </div>

            :
            <div className={"Message align-right"}>
            <div className="Avatar">
              <Avatar alt={isLogin.name} src={isLogin.picture} />

              
            </div>
            <div className="Content">
              <div className="Text">{m.message}</div>
              <div className="Time">{servicesFunctions.formatTimestamp(m.timestamp)}</div>
            </div>
          </div>
            
            }

            </div>
    ))}


{/* {messages && messages.map((m: ChatModel, index) => (
  <div key={m.id} className={m.message === "Typing..." ? "Message typing" : "Message"}>
    {m.role === 0 ? (
        <div className="Message">
            <div className="Avatar">
                <img src={avatar1} alt="Avatar" />
            </div>
            <div className="Content">
                <div className="Text">{m.message}</div>
                <div className="Time">{servicesFunctions.formatTimestamp(m.timestamp)}</div>
            </div>
        </div>
    ) : (
      <div className="Message  align-right">
            <div className="Avatar">
              <Avatar alt={isLogin.name} src={isLogin.picture} />

              
            </div>
            <div className="Content">
              <div className="Text">{m.message}</div>
              <div className="Time">{servicesFunctions.formatTimestamp(m.timestamp)}</div>
            </div>
          </div>
    )}
  </div>
))} */}

     
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
