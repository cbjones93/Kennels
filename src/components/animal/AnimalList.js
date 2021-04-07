import React, { useEffect, useState } from 'react';
import { AnimalCard } from './AnimalCard';
import { deleteAnimal, getAllAnimals, } from '../../modules/AnimalManager';
import {useHistory} from 'react-router-dom'


export const AnimalList = () => {
    
    const history = useHistory();
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
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { history.push("/animals/create") }}>
                    Admit Animal
  </button>
            </section>
            {animals.map(animal =>
                <AnimalCard
                    key={animal.id}
                    animal={animal}
                    handleDeleteAnimal={handleDeleteAnimal} />)}
        </div>
    );
}