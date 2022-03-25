import "./chat.css";
// import { to_Decrypt, to_Encrypt } from "../../aes";
import React, { useState, useEffect, useRef } from "react";
import Layout from "../../components/layout/layout";
import { getChat } from "../service";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function Chat({ username, roomname, socket }) {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  // Obtenemos la Id del anuncio del cual queremos recuperar el chat
  const location = useLocation()
  const idAnuncio = location.state?.idAnuncio
  const autor = location.state?.autor


  useEffect(() => {
    getChat(idAnuncio).then(chat => {
      setMessages(chat.results[0].mensajes)
    })
    socket.on("message", (data) => {
      setMessages((prevState) => ([
        ...prevState,
        {
          username: data.username,
          text: data.text
        }
      ]));
    });
  }, [socket, idAnuncio]);

  const sendData = () => {
    if (text !== "") {
      //encrypt here
      const ans = text;
      socket.emit("chat", ans);
      setText("");
    }
  };
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  console.log(messages, "mess");

  return (
    <Layout>
      <div className="chats">
        <div className="user-name">
          <h2>
            {roomname}
          </h2>
          <span style={{ fontSize: "1rem" }}>Para {autor}</span>
        </div>
        <div className="chats-message">
          {messages.map((i) => {
            if (i.username === username) {
              return (
                <div className="message">
                  <p>{i.text}</p>
                  <span>{i.username}</span>
                </div>
              );
            } else {
              return (
                <div className="message mess-right">
                  <p>{i.text}</p>
                  <span>{i.username}</span>
                </div>
              );
            }
          })}
          <div ref={messagesEndRef} />
        </div>
        <div className="send">
          <input
            placeholder="Escribe tu mensaje"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                sendData();
              }
            }}
          ></input>
          <button onClick={sendData}>Enviar</button>
        </div>
      </div>
    </Layout>
  );
}
export default Chat;
