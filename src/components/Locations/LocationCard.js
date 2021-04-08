import React from "react";
import "./Location.css";
import { Link, useHistory } from 'react-router-dom'

export const LocationCard = ({ location, handleDeleteLocation }) => {
    const history = useHistory()
    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
                </picture>
                <h3><span className="card-petName"> {location.name}</span></h3>
                <p>address:{location.address}</p>
                <Link to={`/locations/${location.id}`}>
                    <button>Details</button>
                </Link>
                <button type="button"
                    onClick={() => history.push(`/locations/${location.id}/edit`)}>
                    Edit
                </button>
                <button type="button" onClick={() => handleDeleteLocation(location.id)}>Close Location</button>
            </div>
        </div>
    );
}