import React, { useState, useEffect } from "react";
import { getAnimalById } from "../../modules/AnimalManager";
import "./AnimalSpotlight.css";

export const AnimalSpotlight = ({animalId}) =>{
    const [animal,setAnimal] = useState({});

    useEffect(() =>{
        getAnimalById(animalId).then(animal =>{
            setAnimal(animal);
        });
    },[animalId]);

    return (
        <div className="animal-spotlight">
        {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
        <div>
          <h2>{animal.name}</h2>
          <h4>{animal.breed}</h4>
          <img className="animal_image" src={animal.image} alt={animal.name}/>
        </div>
      </div>
    )
}