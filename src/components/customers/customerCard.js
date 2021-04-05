import React from "react";
import "./customer.css";

export const CustomerCard = ({customer}) =>{
    return (
        <div className ="card">
            <div className="card-content">
                <picture>
                {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
                </picture>
                <h3>Name:<span className="card-petName"> {customer.name}</span></h3>
                <p>Address:{customer.address}</p>
            </div>
        </div>
    );
    }