import Layout from "../layout/layout";
import storage from "../../utils/storage";
import { getUserChats } from "../chat/service";
import { useEffect, useState } from "react";
import { Redirect, } from "react-router";
import Mensaje from "./Mensaje";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function MessagePage() {
  const [t] = useTranslation("common");
  const myUser = storage.get("name");
  const [chat, setChat] = useState([]);
  const [error, setError] = useState([]);
  useEffect(() => {
    getUserChats(myUser)
      .then((chats) => setChat(chats.results))
      .catch((error) => setError(error));
  }, [myUser]);

  if (error?.status === 404) {
    return <Redirect to="/404" />;
  }

  return (
    <>
      <Layout>
        {chat.length ? (
          <div>
            <h4 className="titleMensaje">{t("mensaje.mensaje")}</h4>
            <div>
              {chat.map(({ idAnuncio, nombreAnuncio, comprador, ...chat }) => (
                <Link
                  to={{
                    pathname: `/chat/${nombreAnuncio}/${comprador}`,
                    state: {
                      idAnuncio: idAnuncio,
                      autor: myUser,
                    },
                  }}
                  style={{ textDecoration: "none", color: "black" }}
                  key={idAnuncio}
                >
                  <div key={idAnuncio}>
                    <Mensaje
                      {...chat}
                      nombreAnuncio={nombreAnuncio}
                      comprador={comprador}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <h4>{t("mensaje.conversaciones")}</h4>
        )}
      </Layout>
    </>
  );
}
export default MessagePage;
