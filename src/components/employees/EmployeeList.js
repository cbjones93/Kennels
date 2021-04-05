import React, { useEffect, useState } from 'react';
import { EmployeeCard } from "./EmployeeCard"
import { deleteEmployee, getAllEmployees } from '../../modules/EmployeeManager';

export const EmployeeList = () => {
    const handleDeleteEmployee = id =>{
        deleteEmployee(id)
        .then(()=> getAllEmployees().then(setEmployees))
    }
    const [employees, setEmployees] = useState([]);
    const getEmployees = () => {
        return getAllEmployees().then(employeesFromAPI => {
            setEmployees(employeesFromAPI)
        });
    };
    useEffect(() => {
        getEmployees();
    }, []);
    return (
        <div className="container-cards">
            {employees.map(employee =>
                <EmployeeCard
                    key={employee.id}
                    employee={employee}
                    handleDeleteEmployee={handleDeleteEmployee} />)}
        </div>
    );
};