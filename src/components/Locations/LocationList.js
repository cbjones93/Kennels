import React ,{useState, useEffect} from 'react';
import {getAllLocations} from '../../modles/LocationManager';
import {LocationCard, locationCard} from './locationCard';

export const LocationList = () =>{
    const [locations,setLocations] = useState([]);
    const getLocations = () =>{
        return getAllLocations().then(locationsFromAPI =>{
            setLocations(locationsFromAPI);
        });
    };
    useEffect(()=>{
        getLocations();
    },[]);
    return (
        <div className="container-cards">
           {locations.map(location => 
           <LocationCard key ={location.id} location ={location}/>)}
        </div>
    )
}