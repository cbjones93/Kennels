const remoteURL = "http://localhost:5002"

export const getCustomerById = (customerId) =>{
    return fetch (`${remoteURL}/animals/${customerId}?_expand=location&_expand=customer`)
    .then(res => res.json())
}

export const getAllCustomers = () =>{
    return fetch (`${remoteURL}/customers`)
    .then(res => res.json())
}

export const deleteCustomer = (id) => {
    return fetch(`${remoteURL}/customers/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }