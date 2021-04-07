import React, { useEffect, useState } from 'react';
import { AnimalCard } from './AnimalCard';
import { deleteAnimal, getAllAnimals, } from '../../modules/AnimalManager';

export const AnimalList = () => {
    const handleDeleteAnimal = id => {
        deleteAnimal(id)
        .then(() => getAllAnimals().then(setAnimals));
    };
    const [animals, setAnimals] = useState([]);

    const getAnimals = () => {
        return getAllAnimals().then(animalsFromAPI => {
            setAnimals(animalsFromAPI)
        });
    };
    useEffect(() => {
        getAnimals();
    }, []);


    return (
        <div className="container-cards">
            {animals.map(animal =>
                <AnimalCard
                    key={animal.id}
                    animal={animal}
                    handleDeleteAnimal={handleDeleteAnimal} />)}
        </div>
    );
}