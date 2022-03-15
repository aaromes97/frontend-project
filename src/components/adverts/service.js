import client from "../../api/client";

const adsBaseUrl = "/api";

export const getLatestAds = () => {
  const url = `${adsBaseUrl}`;
  return client.get(url);
};
export const createAd = async (ad) => {
  const url = `${adsBaseUrl}`;
  return client.post(url, ad);
};


export const getFilteredAds = (filter) => {
  const filterList = {
    nombre: filter.nombre,
    tags: filter.tags,
    precio: [filter.precioMin, filter.precioMax],
    venta: filter.sale,
  };

  const formatFilter = (filter) => {
    const filterKeys = Object.keys(filter);
    let filteredQuery = "";
    for (const key of filterKeys) {
      const value = filter[key];
      if (value) {
        if (Array.isArray(value)) {
          for (const element of value) {
            if (element) {
              filteredQuery += `&${key}=${element}`;
            }
          }
        } else {
          filteredQuery += `&${key}=${filter[key]}`;
        }
      }
    }
    return filteredQuery;
  };
  const url = `${adsBaseUrl}/?${formatFilter(filterList)}`;
  return client.get(url);
};

