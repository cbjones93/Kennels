import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router";
import {getLocationById, updatedLocation} from "../../modules/LocationManager"
import "./LocationForm.css"

export const LocationEditForm = () => {
    const [location, setLocation] = useState({
        name: "",
        address: ""
    })
    const [isLoading, SetIsLoading] = useState(false);
    const { locationId } = useParams();
    const history = useHistory();

    const handleFieldChange = event => {
        const stateToChange = { ...location };
        stateToChange[event.target.id] = event.target.value;
        setLocation(stateToChange);
    };

    const handleControlledInputChange = (event) => {
        const newLocation = { ...location }
        let SelectedVal = event.target.value
        if (event.target.id.includes("Id")
        ) {
            SelectedVal = parseInt(SelectedVal)
        }
        newLocation[event.target.id] = SelectedVal
        setLocation(newLocation)
    }
    const updateExistingLocation = event => {
        event.preventDefault()
        SetIsLoading(true)
        const editedLocation = {
            id: locationId,
            name: location.name,
            address: location.address
        };
        updatedLocation(editedLocation)
        .then(()=>history.push("/locations"))
    }
    useEffect(() =>{
        getLocationById(locationId)
        .then(location =>{
            setLocation(location)
            SetIsLoading(false);
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
                            value={location.name}
                        />
                        <label htmlFor="name">Location name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="address"
                            value={location.address}
                        />
                        <label htmlFor="name">Location address</label>
                        </div>
                        <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingLocation}
                            className="btn btn-primary"
                        >Submit</button>
                    </div>
                        </fieldset>
                        </form>
                        </>
                        );

}