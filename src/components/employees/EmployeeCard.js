import React from "react";
import "./Employee.css";

export const EmployeeCard = ({employee}) =>{
    return (
        <div className ="card">
            <div className="card-content">
                <picture>
                {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
                </picture>
                <h3>Name:<span className="card-petName"> {employee.name}</span></h3>
            </div>
        </div>
    );
    }