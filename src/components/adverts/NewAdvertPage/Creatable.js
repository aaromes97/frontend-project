// import React, { Component } from "react";
import CreatableSelect from "react-select/creatable";
import { useState } from "react";


// const options = [
//     { value: "red", label: "rojo", color: "#FF5630" },
//     { value: "blue", label: "azul", color: "#0052CC" },
//     { value: "green", label: "verde", color: "#36B37E" },
//     { value: "orange", label: "naranja", color: "#FF8B00" }
// ];

const components = {
    DropdownIndicator: null,
};

function Creatable() {

    const [tags, setTags] = useState([]);

    const handleChange = (newValue, actionMeta) => {
        console.group("Value Changed");
        console.log(newValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
    };
    return (
        <CreatableSelect isMulti onChange={handleChange} components={components} />
    );
}

export default Creatable;
