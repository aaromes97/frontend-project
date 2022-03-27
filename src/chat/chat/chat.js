import "./chat.css";
// import { to_Decrypt, to_Encrypt } from "../../aes";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Layout from "../../components/layout/layout";
import { getChat, updateChat } from "../service";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function Chat({ username, roomname, socket }) {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  // Obtenemos la Id del anuncio del cual queremos recuperar el chat
  const location = useLocation()
  const idAnuncio = location.state?.idAnuncio
  const autor = location.state?.autor
  const firstUpdate = useRef(true);

  useEffect(() => {
    if (username && roomname) {
      socket.emit("joinRoom", { username, roomname });
    } else {
      alert("username and roomname are must !");
      window.location.reload();
    }
    getChat(idAnuncio).then(chat => {
      setMessages(chat.results[0].mensajes)
    })
    // cuando renderiza añade al estado todos los elementos que devuelve el socket
    socket.on("message", (data) => {
      setMessages((prevState) => ([
        ...prevState,
        {
          username: data.username,
          text: data.text
        }
      ]));
    });
  }, [socket, idAnuncio, username, roomname]);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
    } else {
      try {
        let prova =
        {
          "mensajes": messages
        }
        console.log(prova)
        // chat.append("mensajes", JSON.stringify(prova));
        // console.log(chat + "chatForm")
        updateChat(idAnuncio, prova);
      } catch (error) {
        console.log(error);
      }
    }
  })


  const sendData = async () => {
    if (text !== "") {
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
