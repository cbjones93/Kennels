const remoteURL = "http://localhost:5002"

export const getAllLocations = () =>{
    return fetch (`${remoteURL}/locations`)
    .then(res => res.json())
}
export const addLocation = (newLocation) =>{
  return fetch (`${remoteURL}locations/`,{
    method:"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newLocation)
  }).then(response => response.json())
}
export const getLocationById = (id) =>{
  return fetch (`${remoteURL}/locations/${id}`)
  .then(res => res.json())
}

export const updatedLocation = (editedLocation) => {
  return fetch(`${remoteURL}/locations/${editedLocation.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedLocation)
    }).then(data => data.json());
}
export const deleteLocation = (id) => {
    return fetch(`${remoteURL}/locations/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }