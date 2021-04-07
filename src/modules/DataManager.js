const remoteURL = "http://localhost:5002"
export const getAllData = () =>{
    return fetch (`${remoteURL}/db`)
    .then(res => res.json())
}