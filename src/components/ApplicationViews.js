import React, {useState} from "react"
import { Route, Redirect } from "react-router-dom"
import { Home } from "../Home"
// import {AnimalCard} from "../components/animal/AnimalCard"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeList } from "./employees/EmployeeList"
import { CustomerList } from "./customers/CustomerList"
// import {LocationCard} from "./Locations/locationCard"
import { LocationList } from "./Locations/LocationList"
import { AnimalDetail } from "./animal/AnimalDetail"
import { LocationDetail } from './Locations/LocationDetail'
import { AnimalForm } from './animal/AnimalForm'
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { AnimalEditForm } from "./animal/AnimalEditForm"
import { EmployeeForm } from "./employees/EmployeeForm"
import {EmployeeEditForm} from "./employees/EmployeeEditForm"
import { LocationForm } from "./Locations/LocationForm"
import {LocationEditForm} from "./Locations/LocationEditForm"


export const ApplicationViews = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("kennel_customer") !== null
);
    const setAuthUser = (user) => {
        sessionStorage.setItem("kennel_customer", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    };
    return (
        <>

            {/* --------------------------------------ANIMALS----------------------------------------------------- */}
            <Route exact path="/animals">
                {isAuthenticated ?
                    <AnimalList /> :
                    <Redirect to="/login" />}
            </Route>

            <Route exact path="/animals/:animalId(\d+)">
                {isAuthenticated ?
                    <AnimalDetail /> :
                    <Redirect to="/login" />}
            </Route>

            <Route path="/animals/:animalId(\d+)/edit">
                {isAuthenticated ?
                    <AnimalEditForm /> :
                    <Redirect to="/login" />}
            </Route>

            <Route path="/animals/create">
                <AnimalForm />
            </Route>

            {/* ----------------------------------------EMPLOYEES--------------------------------------------------------- */}

            <Route exact path="/employees">
                {isAuthenticated ?
                    <EmployeeList /> :
                    <Redirect to="/login" />}
            </Route>

            <Route path="/employees/create">
                <EmployeeForm />
            </Route>

            <Route path="/employees/:employeeId(\d+)/edit">
            {isAuthenticated ?
                    <EmployeeEditForm /> :
                    <Redirect to="/login" />}
            </Route>
            {/* ----------------------------------------CUSTOMERS--------------------------------------------------------- */}

            <Route path="/customers">
                {isAuthenticated ?
                    <CustomerList /> :
                    <Redirect to="/login" />}
            </Route>



            {/* ----------------------------------------LOCATIONS--------------------------------------------------------- */}

            <Route exact path="/locations">
                {isAuthenticated ?
                    <LocationList /> :
                    <Redirect to="/login" />}
            </Route>

            <Route exact path="/locations/:locationId(\d+)">
            {isAuthenticated ?
                <LocationDetail />:
                <Redirect to="/login" />}
            </Route>

            <Route path="/locations/create">
                <LocationForm />
            </Route>

            <Route path="/locations/:locationId(\d+)/edit">
            {isAuthenticated?
                    <LocationEditForm /> :
                    <Redirect to="/login" />}
            </Route>


            {/* ----------------------------------------HOME--------------------------------------------------------- */}


            <Route path="/login">
                <Login  setAuthUser={setAuthUser}/>
            </Route>

            <Route path="/register">
                <Register />
            </Route>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home setAuthUser={setAuthUser}/>
            </Route>

        </>
    )
}