import client from "../api/client";

const adsBaseUrl = "/api/chats";

export const getChats = async () => {
    const url = `${adsBaseUrl}`;
    return await client.get(url);
};
export const getChat = (advertId) => {
    const url = `${adsBaseUrl}/${advertId}`;
    return client.get(url);
};
export const createChat = async (chat) => {
    const url = `${adsBaseUrl}`;
    return client.post(url, chat);
};
export const updateChat = async (advertId, chat) => {
    const url = `${adsBaseUrl}/${advertId}`;
    return client.put(url, chat);
};
