import React, { useState, useEffect } from 'react';
import './LocationDetail.css';
import { useParams, useHistory } from "react-router-dom"
import { deleteLocation, getLocationById } from '../../modules/LocationManager'

export const LocationDetail = () => {
    const handleDelete = () => {
        
        setIsLoading(true);
        deleteLocation(locationId).then(() =>
          history.push("/locations")
        );
      };
    const [location, setLocation] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { locationId } = useParams();
    const history = useHistory();

    useEffect(() => {
        console.log("useEffect", locationId)
        getLocationById(locationId)
            .then(location => {
                setLocation({
                    name: location.name,
                    address: location.address
                });
                setIsLoading(false);
            });
    }, [locationId]);

    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            <div className="location_address">{location.address}</div>
            <button type="button" disabled={isLoading} onClick={handleDelete}>
         Close Location
        </button>
        
        </section>
    );
}