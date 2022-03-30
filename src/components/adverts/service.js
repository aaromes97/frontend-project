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

export const editDetailedAdd = (advertId) => {
  const url = `${adsBaseUrl}/${advertId}`;
  return client.put(url, advertId);
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



export const getFilteredAds = (filter) => {
  const filterList = {
    nombre: filter.nombre,
    tags: filter.tags,
    precioMin: filter.precioMin,
    precioMax: filter.precioMax,
    venta: filter.sale,
    autor: filter.autor
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


