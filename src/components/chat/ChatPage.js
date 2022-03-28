import "./chat.css";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Layout from "../layout/layout";
import { getChat, updateChat, createChat } from "./service";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import storage from "../../utils/storage";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Chat({ username, roomname, socket }) {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  // Obtenemos la Id del anuncio del cual queremos recuperar el chat
  const location = useLocation();
  const idAnuncio = location.state?.idAnuncio;
  const autor = location.state?.autor;
  const firstUpdate = useRef(true);
  const myUser = storage.get("name")
  const [t] = useTranslation("common");

  useEffect(() => {
    const chatToCreate = {
      idAnuncio: idAnuncio,
      vendedor: autor,
      nombreAnuncio: roomname,
      comprador: username,
    };
    if (username && roomname) {
      socket.emit("joinRoom", { username, roomname });
    } else {
      alert("username and roomname are must !");
      window.location.reload();
    }
    getChat(idAnuncio, username).then(chat => {
      if (chat.results === null) {
        createChat(chatToCreate);
      } else {
        setMessages(chat.results[0].mensajes);
      }
    });

    // cuando renderiza añade al estado todos los elementos que devuelve el socket
    socket.on("message", (data) => {
      setMessages((prevState) => [
        ...prevState,
        {
          username: data.username,
          text: data.text,
        },
      ]);
    });
  }, [socket, idAnuncio, username, roomname, autor]);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
    } else {
      try {
        let prova = {
          mensajes: messages,
        };
        updateChat(idAnuncio, username, prova);
      } catch (error) {
        console.log(error);
      }
    }
  });

  const sendData = async () => {
    if (text !== "") {
      const ans = text;
      socket.emit("chat", ans, myUser);
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
          <Link
            to={`/adverts/${roomname}-${idAnuncio}`}
            style={{ textDecoration: "none", color: "White" }}>
            <div className="link-name">
              <span>{roomname}</span>
            </div>
          </Link>
          <span style={{ fontSize: "1rem" }}>{t("mensaje.propietario")} {autor}</span>
        </div>
        <div className="chats-message">
          {messages.map((i) => {
            if (i.username === myUser) {
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
            placeholder={t("mensaje.escribe")}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                sendData();
              }
            }}
          ></input>
          <button onClick={sendData}>{t("restablece.enviar")}</button>
        </div>
      </div>
    </Layout>
  );
}
export default Chat;
