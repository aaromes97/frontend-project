import { useState } from "react";
import { getFilteredAds } from "../service";
import '../../layout/styles.css';

function AdvertFilter(props) {
  const [filter, setFilter] = useState({
    nombre: "",
    precioMin: "",
    precioMax: "",
    venta: "",
    // tags: [],
    foto: "",
  });

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

  return (

    <nav className="flex-container">
          
    <div className="flex-items">
              
    <form noValidate onSubmit={handleFilter }>
      <div className="input-group input-group-sm mb-3">
        <input
        className="textbox"
        name="nombre"
        type="text"
        placeholder="Buscar Producto"
        onChange={handleInput}
        value={filter.nombre}
        required
              />   
      </div>
      

      <div className="input-group input-group-sm mb-3">
        <input
        className="textbox"
        name="precioMin"
        type="number"
        placeholder="Precio mínimo"
        onChange={handleInput}
        min="0"
        value={filter.precioMin}
  
       />
       </div>
      <div className="input-group input-group-sm mb-3">
        <input
        className="textbox"
        name="precioMax"
        type="number"
        placeholder="Precio Máximo"
        onChange={handleInput}
        min="0"
        value={filter.precioMax}
        
        />
      </div>
      <div className="input-group input-group-sm mb-3">
      <select className="form-control"  name="sale" onChange={handleInput}>
        <option value="">Compra/Venta</option>
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
      <div>
      <button className="boton" type="submit">SEARCH</button>

      
      </div>
    </form>
    </div>

    </nav>
  );
}

export default AdvertFilter;