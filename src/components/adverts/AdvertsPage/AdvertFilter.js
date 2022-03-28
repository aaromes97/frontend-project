import { useState } from "react";
import { getFilteredAds } from "../service";
import '../../layout/styles.css';
import { useTranslation } from "react-i18next"

function AdvertFilter(props) {

  const [filter, setFilter] = useState({
    nombre: "",
    precioMin: "",
    precioMax: "",
    venta: "",
    // tags: [],
    foto: "",
  });

  const { t } = useTranslation("common")

  const handleInput = (event) => {
    const filterName = event.target.name;
    const filterValue = event.target.value;
    setFilter({ ...filter, [filterName]: filterValue });
  };

  const handleFilter = async (event) => {
    event.preventDefault();
    let adverts = props.selectedAds;
    try {
      const ads = await getFilteredAds(filter);
      ads.results.reverse()
      adverts = ads
      props.filterAds(adverts);
    } catch (error) {
      console.error(error);
    }
  };

  const handleReset = async () => {
    Array.from(document.querySelectorAll("input")).forEach(input => (input.value = ""));
    setFilter({ filter: [{}] });
    try {
      const ads = await getFilteredAds([{}]);
      ads.results.reverse()
      props.filterAds(ads);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form noValidate onSubmit={handleFilter} className="flex-items">
      <div className=" search" >
        <input
          className="textbox"
          name="nombre"
          type="text"
          placeholder={t("filter.buscar-producto")}
          onChange={handleInput}
          value={filter.nombre}
          required
        />
      </div>
      <div className="precioMin">
        <input
          className="textbox"
          name="precioMin"
          type="number"
          placeholder={t("filter.precio-minimo")}
          onChange={handleInput}
          min="0"
          value={filter.precioMin}
        />
      </div>
      <div className="precioMax">
        <input
          className="textbox"
          name="precioMax"
          type="number"
          placeholder={t("filter.precio-maximo")}
          onChange={handleInput}
          min="0"
          value={filter.precioMax}
        />
      </div>
      <div className=" Compra">
        <select className="select-header" name="sale" onChange={handleInput}>
          <option value="">{t("filter.compra-venta")}</option>
          <option value="true">{t("filter.venta")}</option>
          <option value="false">{t("filter.compra")}</option>
        </select>
      </div>
      <div className="submit">
        <button className="boton" type="submit">{t("filter.buscar")}</button>
      </div>
      <div className="submit">
        <button className="boton" type='reset' onClick={handleReset} >RESET</button>
      </div>
    </form>
  );
}

export default AdvertFilter;
