import React ,{useState, useEffect} from 'react';
import {getAllCustomers} from '../../modles/CustomerManager';
import {CustomerCard} from './customerCard'

export const CustomerList = () =>{
    const [customers,setCustomers] = useState([]);
    const getCustomers = () => {
        return getAllCustomers().then(customersFromAPI => {
            setCustomers(customersFromAPI);
        });
    };
    useEffect(()=>{
        getCustomers()
    },[]);
    return (
        <div className="container-cards">
       {customers.map(customer =>
         <CustomerCard key={customer.id} customer={customer}/>)}
        </div>
    );
};