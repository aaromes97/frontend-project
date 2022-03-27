import Layout from "../layout/layout";
import storage from "../../utils/storage";
import { getUserChats, updateChat } from "../../chat/service";
import { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router";
import { EmptyList } from "../adverts/AdvertsPage/EmptyList";
import Mensaje from "./Mensaje";
import { Link } from "react-router-dom";

function MessagePage() {
  const vendedor = storage.get("name");
  const [chat, setChat] = useState([]);
  const [error, setError] = useState([]);
  useEffect(() => {
    getUserChats(vendedor)
      .then((chats) => setChat(chats.results))
      .catch((error) => setError(error));
  }, [vendedor]);
  if (error?.status === 404) {
    return <Redirect to="/404" />;
  }

  return (
    <>
      <Layout>
        {chat.length ? (
          <div>
            <h4 className="titleMensaje">Mensajes</h4>
            <div>
              {chat.map(({ idAnuncio, nombreAnuncio, comprador, ...chat }) => (
                <Link
                  to={{
                    pathname: `/chat/${nombreAnuncio}/${vendedor}`,
                    state: {
                      idAnuncio: idAnuncio,
                      autor: vendedor,
                      comprador: comprador,
                    },
                  }}
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
          <h4>No tienes conversaciones abiertas</h4>
        )}
      </Layout>
    </>
  );
}
export default MessagePage;
