const remoteURL = "http://localhost:5002"

export const getCustomerById = (animalId) =>{
    return fetch (`${remoteURL}/animals/${animalId}?_expand=location&_expand=customer`)
    .then(res => res.json())
}

export const getAllCustomers = () =>{
    return fetch (`${remoteURL}/customers`)
    .then(res => res.json())
}