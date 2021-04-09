import React, { useState, useEffect } from "react"
import { useHistory } from "react-router";
import { updatedAnimal, getAnimalById } from "../../modules/AnimalManager"
import { PropsAndState } from "../PropsAndState";
import "./AnimalForm.css"
import { useParams } from "react-router-dom"
import { getAllLocations } from "../../modules/LocationManager";
import { getAllCustomers } from "../../modules/CustomerManager"


export const AnimalEditForm = () => {
    const [animal, setAnimal] = useState({ name: "", breed: "" });
    const [locations, setLocations] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const { animalId } = useParams();
    const history = useHistory();

    const handleFieldChange = evt => {
        const stateToChange = { ...animal };
        stateToChange[evt.target.id] = evt.target.value;
        setAnimal(stateToChange);
    };
    useEffect(() => {
        getAllCustomers().then(customersFromAPI => {
            setCustomers(customersFromAPI)
        })
    }, []);
    useEffect(() => {
        getAllLocations().then(LocationsFromAPI => {
            setLocations(LocationsFromAPI)
        })
    }, []);
    const handleControlledInputChange = (event) => {
        const newAnimal = { ...animal }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")
        ) {
            selectedVal = parseInt(selectedVal)
        }
        newAnimal[event.target.id] = selectedVal
        setAnimal(newAnimal)
    }
    const updateExistingAnimal = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedAnimal = {
            id: animalId,
            name: animal.name,
            breed: animal.breed,
            locationId: animal.locationId,
            customerId: animal.customerId,
            image: animal.image
        };
        updatedAnimal(editedAnimal)
            .then(() => history.push("/animals"))
    }
    useEffect(() => {
        getAnimalById(animalId)
            .then(animal => {
                setAnimal(animal);
                setIsLoading(false);
            })
    }, []);
    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="name"
                            value={animal.name}
                        />
                        <label htmlFor="name">Animal name</label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="breed"
                            value={animal.breed}
                        />
                        <label htmlFor="breed">Breed</label>
                        <label htmlFor="customerId">Customer: </label>
                        <select value={animal.customerId} name="customer" id="customerId" onChange={handleControlledInputChange} className="form-control" >
                            <option value="0">Select a customer</option>
                            {customers.map(c => (
                                <option key={c.id} value={c.id}>
                                    {c.name}
                                </option>
                            ))}
                        </select>
                        <select value={animal.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
                            <option value="0">Select a location</option>
                            {locations.map(l => (
                                <option key={l.id} value={l.id}>
                                    {l.name}
                                </option>
                            ))}
                        </select>

                        <label htmlFor="location">Assign to location: </label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="image"
                            value={animal.image}
                        />

                    <label htmlFor="image">Animal image URL:</label>

                    </div>
                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingAnimal}
                            className="btn btn-primary"
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );

}