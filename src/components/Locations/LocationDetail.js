import React, { useState, useEffect } from 'react';
import './LocationDetail.css';
import { useParams, useHistory } from "react-router-dom"
import { getLocationById } from '../../modules/LocationManager'

export const LocationDetail = () => {
    const [location, setLocation] = useState({});

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
            });
    }, [locationId]);

    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            <div className="location_address">{location.address}</div>
        
        </section>
    );
}