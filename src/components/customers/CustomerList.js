import React, { useState, useEffect } from 'react';
import { deleteCustomer, getAllCustomers, } from '../../modules/CustomerManager';
import { CustomerCard } from './CustomerCard'
import { useHistory } from "react-router-dom"

export const CustomerList = () => {
    const history = useHistory();
    const handleDeleteCustomer = id => {
        deleteCustomer(id)
            .then(() => getAllCustomers().then(setCustomers));
    }
    const [customers, setCustomers] = useState([]);
    const getCustomers = () => {
        return getAllCustomers().then(customersFromAPI => {
            setCustomers(customersFromAPI);
        });
    };
    useEffect(() => {
        getCustomers()
    }, []);
    return (
        <div className="container-cards">
            {customers.map(customer =>
                <CustomerCard
                    key={customer.id}
                    customer={customer}
                    handleDeleteCustomer={handleDeleteCustomer} />)}
        </div>
    );
};