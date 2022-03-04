import client from "../../api/client";

const adsBaseUrl = "/";

export const getLatestAds = () => {
  const url = `${adsBaseUrl}anuncios`;
  console.log(url, 'url')
  return client.get(url);
};


export const getAllAdverts = () => {
  const url = `${adsBaseUrl}/adverts`;
  return client.get(url);
};