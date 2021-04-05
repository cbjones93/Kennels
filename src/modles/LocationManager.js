const remoteURL = "http://localhost:5002"

export const getAllLocations = () =>{
    return fetch (`${remoteURL}/locations`)
    .then(res => res.json())
}