import Layout from "../layout/layout";
import storage from "../../utils/storage";
import { getUserChats, updateChat } from "../../chat/service";
import { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router";
import { EmptyList } from "../adverts/AdvertsPage/EmptyList";
import Mensaje from "./Mensaje";

function MessagePage() {
  const vendor = storage.get("name");
  const [chat, setChat] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    getUserChats(vendor)
      .then((chats) => setChat(chats.results))
      .catch((error) => setError(error));
  }, [vendor]);

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
              {chat.map(({ _id, ...chat }) => (
                <div key={_id}>
                  <Mensaje {...chat} />
                </div>
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
