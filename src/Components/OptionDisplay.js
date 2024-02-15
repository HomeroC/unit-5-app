import React from "react";
import { useSelector } from "react-redux";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice.js";

const OptionDisplay = () => {
    let currentPotentials = useSelector(selectPotentials);
    console.log(currentPotentials)

    return <div className="stack">{currentPotentials.map(item => {
        return (
            <h2 key={item.name.offical}> {item.name.common }</h2>
        )
    })}</div>;
};

export default OptionDisplay;
