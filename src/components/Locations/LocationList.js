import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { getAllEmployees } from '../../modules/EmployeeManager';
import { deleteLocation, getAllLocations } from '../../modules/LocationManager';
import { LocationCard } from './LocationCard';


export const LocationList = () => {
    const history = useHistory();
    const handleDeleteLocation = id => {
        deleteLocation(id)
            .then(() => getAllLocations().then(setLocations))
    }
    const [locations, setLocations] = useState([]);
    const getLocations = () => {
        return getAllLocations().then(locationsFromAPI => {
            setLocations(locationsFromAPI);
        });
    };
    useEffect(() => {
        getLocations();
    }, []);
    return (
        <div className="container-cards">
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { history.push("/locations/create") }}>
                    Create Location
                </button>
            </section>
            {locations.map(location =>
                <LocationCard
                    key={location.id}
                    location={location}
                    handleDeleteLocation={handleDeleteLocation} />)}
        </div>
    )
}