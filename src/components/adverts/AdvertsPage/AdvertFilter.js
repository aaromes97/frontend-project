import { useState } from "react";
import { getFilteredAds } from "../service";
import '../../layout/styles.css';
import {useTranslation} from "react-i18next"


function AdvertFilter(props) {

  const [filter, setFilter] = useState({
    nombre: "",
    precioMin: "",
    precioMax: "",
    venta: "",
    // tags: [],
    foto: "",
  });

    const {t} = useTranslation("common")

  const handleInput = (event) => {
    const filterName = event.target.name;
    const filterValue = event.target.value;
    setFilter({ ...filter, [filterName]: filterValue });
  };

  const handleMultiSelect = (event) => {
    const filterName = event.target.name;
    const filterValue = event.target.value;
    let multiselect = [...filter[filterName]];
    if (multiselect.indexOf(filterValue) < 0) {
      multiselect.push(filterValue);
    } else {
      multiselect = multiselect.filter((e) => e !== filterValue);
    }
    setFilter({ ...filter, [filterName]: multiselect });
  };

  const handleFilter = async (event) => {
    event.preventDefault();
    let adverts = props.selectedAds;
    try {
      const ads = await getFilteredAds(filter);
      adverts = ads
      console.log(adverts)
        props.filterAds(adverts);
    
    } catch (error) {
      console.error(error);
    }
  };
    
    const handleReset = async (event) => {
        
    }

  return (

    
          
              
      <form noValidate onSubmit={handleFilter } className="flex-items">
     
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
      <select className=""  name="sale" onChange={handleInput}>
        <option value="">{t("filter.compra-venta")}</option>
        <option value="true">Venta</option>
        <option value="false">Compra</option>
      </select>
      </div>
      {/* <div className="input-group input-group-sm mb-3">
        <select
          className="input-group input-group-sm mb-3"
        name="tags"
        onChange={handleMultiSelect}
        multiple={true}
        value={filter.tags}
      
      >
        <option value="lifestyle">Lifestyle</option>
        <option value="mobile">Mobile</option>
        <option value="motor">Motor</option>
        <option value="work">Work</option>
      </select>
      </div> */}
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
