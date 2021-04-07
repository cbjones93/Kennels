import React, { useState, useEffect } from 'react';
import { getAllEmployees } from '../../modules/EmployeeManager';
import { deleteLocation, getAllLocations } from '../../modules/LocationManager';
import { LocationCard, locationCard } from './LocationCard';

export const LocationList = () => {
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
            {locations.map(location =>
                <LocationCard
                    key={location.id}
                    location={location}
                    handleDeleteLocation={handleDeleteLocation} />)}
        </div>
    )
}