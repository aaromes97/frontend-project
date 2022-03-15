import { useEffect, useState } from "react";
import { getLatestAds } from "../components/adverts/service";
import React from 'react'


export const Search =() => {
    
    const [adverts, setAdverts] = useState([]);
    const [saveAdverts, setSaveAdverts] = useState([]);
    const [busqueda, setBusqueda] = useState("");

     useEffect(() => {
        getLatestAds().then((ads) => {
            console.log(ads)
            setAdverts(ads.results)
            setSaveAdverts(ads.results);
        });
    }, []);


    const handleChange = event => {
        setBusqueda(event.target.value);
        filtrar(event.target.value)
        

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
    }

    const filtrar = (terminoBusqueda) => {
        var resultadosBusqueda = saveAdverts.filter((elemento) => {
            if (elemento.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ) {
                return elemento;
            }}
        )
        setAdverts(resultadosBusqueda); 
    }

    return (
    
        <form className="form-inline"  onSubmit={handleSubmit}>
          <input
            class="form-control mr-1"
            type="search"t
            placeholder="Search"
            aria-label="Search"
            value={busqueda}
            onChange={handleChange}
            adverts={adverts}    
            />
             <button className="btn btn-outline-success my-2 mr-1" type="submit">
            Buscar
          </button>
        </form> 
      


   
    )

}
export default Search;


