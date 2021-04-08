import { useState } from 'react';
import { useHistory } from 'react-router';
import { addEmployee } from '../../modules/EmployeeManager';
import './EmployeeForm.css'

export const EmployeeForm = () =>{
    const [employee,setEmployee] =useState({
        name:""
    });
    const history = useHistory();
    const handleControlledInputChange = (event) => {
		const newEmployee = { ...employee}
		let selectedVal = event.target.value
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		newEmployee[event.target.id] = selectedVal
		
		setEmployee(newEmployee)
	}
    const handleClickSaveEmployee = (event) => {
		event.preventDefault();
        addEmployee(employee)
        .then(() =>history.push("/employees")) 
}
return (
    <form className="employeeForm">
        <h2 className="employeeForm__title">New Employee</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="name">Employee name:</label>
                <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee name" value={employee.name} />
            </div>
        </fieldset>
        <button className="btn btn-primary"
            onClick={handleClickSaveEmployee}>
            Save Employee
      </button>
    </form>
)
}