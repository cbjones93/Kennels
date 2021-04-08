import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router";
import {getEmployeeById, updatedEmployee} from "../../modules/EmployeeManager"
import "./EmployeeForm.css"

export const EmployeeEditForm = () =>{
    const [employee,setEmployee] = useState({name: ""})
    const [isLoading,setIsLoading] =useState(false);
    const {employeeId} = useParams();
    const history = useHistory();

    const handleFieldChange = event =>{
        const stateToChange = {...employee};
        stateToChange[event.target.id]=event.target.value;
        setEmployee(stateToChange);
    };

    const handleControlledInputChange = (event) => {
        const newEmployee = { ...employee }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")
        ) {
            selectedVal = parseInt(selectedVal)
        }
        newEmployee[event.target.id] = selectedVal
        setEmployee(newEmployee)
    }
    const updateExistingEmployee = event =>{
        event.preventDefault()
        setIsLoading(true);
        const editedEmployee ={
            id:employeeId,
            name:employee.name
        };
        updatedEmployee(editedEmployee)
        .then(()=>history.push("/employees"))
    }
    useEffect(()=>{
        getEmployeeById(employeeId)
        .then(employee =>{
            setEmployee(employee);
            setIsLoading(false);
        })
    }, []);
    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="name"
                            value={employee.name}
                        />
                        <label htmlFor="name">Employee name</label>
                        </div>
                        <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingEmployee}
                            className="btn btn-primary"
                        >Submit</button>
                    </div>
                        </fieldset>
                        </form>
                        </>
                        );
}