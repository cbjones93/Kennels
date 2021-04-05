import React, {useEffect, useState} from 'react';
import {EmployeeCard} from "./EmployeeCard"
import { getAllEmployees } from '../../modles/EmployeeManager';

export const EmployeeList = () => {
    const [employees,setEmployees] =useState([]);
    const getEmployees = () =>{
        return getAllEmployees().then(employeesFromAPI =>{
          setEmployees(employeesFromAPI)
        });
    };
    useEffect (()=>{
    getEmployees();
}, []);
    return (
        <div className="container-cards">
      {employees.map(employee => 
      <EmployeeCard key={employee.id} employee={employee}/>)}
        </div>
    );
};