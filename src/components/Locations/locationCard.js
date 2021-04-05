import React from "react";
import "./location.css";

export const LocationCard = ({location}) => {
    return (
        <div className ="card">
            <div className="card-content">
                <picture>
                {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
                </picture>
                <h3><span className="card-petName"> {location.name}</span></h3>
                <p>address:{location.address}</p>
            </div>
        </div>
    );
    }