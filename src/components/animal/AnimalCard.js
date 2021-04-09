import React from "react";
import "./Animal.css";

import { Link, useHistory } from "react-router-dom";

export const AnimalCard = ({ animal, handleDeleteAnimal }) => {
    const history = useHistory();
    return (
        <div className="card">
            <div className="card-content">
                <h3>Name:<span className="card-petName"> {animal.name}</span></h3>
                <h4>Breed:{animal.breed}</h4>
                <picture>
                <img className="animal_image" src={animal.image} alt={animal.name}/>
                </picture>

                <Link to={`/animals/${animal.id}`}>
                    <button>Details</button>
                </Link>
                <button type="button"
                    onClick={() => history.push(`/animals/${animal.id}/edit`)}>
                    Edit
                </button>

                <button type="button" onClick={() => handleDeleteAnimal(animal.id)}>Discharge</button>

            </div>
        </div>
    );
}