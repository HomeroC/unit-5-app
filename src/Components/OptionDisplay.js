import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice.js";
import { setDisplayCountry } from "../redux/slices/displayCountrySlice.js";

const OptionDisplay = () => {
    let currentPotentials = useSelector(selectPotentials);
    console.log(currentPotentials)

    const dispatch = useDispatch();

    return <div className="stack">{currentPotentials.map(item => {
        return (
            <h2 key={item.name.offical} onClick={() => {
                dispatch(setDisplayCountry(currentPotentials[item]))
            }}> {item.name.common }</h2>
        )
    })}</div>;
};

export default OptionDisplay;
