import client from "../../api/client";

const adsBaseUrl = "/";

export const getLatestAds = () => {
  const url = `${adsBaseUrl}`;
  return client.get(url);
};
