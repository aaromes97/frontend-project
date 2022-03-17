import client from "../../api/client";

const adsBaseUrl = "/api/anuncios";

export const getLatestAds = async () => {
  const url = `${adsBaseUrl}`;
  return await client.get(url);
};
export const createAd = async (ad) => {
  const url = `${adsBaseUrl}`;
  return client.post(url, ad);
};
export const getAd = (advertId) => {
  const url = `${adsBaseUrl}/${advertId}`;
  return client.get(url);
};
export const deleteAd = (advertId) => {
  const url = `${adsBaseUrl}/${advertId}`;
  return client.delete(url);
};
export const editAd = async (advertId, ad) => {
  const url = `${adsBaseUrl}/${advertId}`;
  return client.put(url, ad);
};
