import client from "../../api/client";

const chatsBaseUrl = "/api/chats";
const chatByVendedorUrl = "/api/messages";
export const getChats = async () => {
  const url = `${chatsBaseUrl}`;
  return await client.get(url);
};
export const getChat = (idAnuncio, username) => {
  const url = `${chatsBaseUrl}/${idAnuncio}/${username}`;
  return client.get(url);
};
export const getUserChats = (vendor) => {
  const url = `${chatByVendedorUrl}/${vendor}`;
  return client.get(url);
};
export const createChat = async (chat) => {
  const url = `${chatsBaseUrl}`;
  return client.post(url, chat);
};
export const updateChat = async (idAnuncio, comprador, chat) => {
  const url = `${chatsBaseUrl}/${idAnuncio}/${comprador}`;
  return client.put(url, chat);
};
