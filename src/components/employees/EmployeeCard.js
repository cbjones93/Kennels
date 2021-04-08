import React from "react";
import { useHistory } from "react-router";
import "./Employee.css";

export const EmployeeCard = ({ employee, handleDeleteEmployee }) => {
    const history = useHistory()
    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
                </picture>
                <h3>Name:<span className="card-petName"> {employee.name}</span></h3>
                <button type="button"
                    onClick={() => history.push(`/employees/${employee.id}/edit`)}>
                    Edit
                </button>
                <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>Terminate</button>
            </div>
        </div>
    );
}