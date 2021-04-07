import React from "react";
import "./Location.css";

export const LocationCard = ({location, handleDeleteLocation}) => {
    return (
        <div className ="card">
            <div className="card-content">
                <picture>
                {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
                </picture>
                <h3><span className="card-petName"> {location.name}</span></h3>
                <p>address:{location.address}</p>
                <button type="button" onClick={() => handleDeleteLocation(location.id)}>Close Location</button>
            </div>
        </div>
    );
    }