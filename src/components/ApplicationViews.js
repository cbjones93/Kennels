import React from "react"
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

export const ApplicationViews = () => {
    const isAuthenticated = () => sessionStorage.getItem("kennel_customer") !== null;
    return (
        <>
            <Route exact path="/animals">
                {(isAuthenticated()) ?
                    <AnimalList /> :
                    <Redirect to="/login" />}
            </Route>

            <Route path="/login">
                <Login />
            </Route>

            <Route path="/register">
                <Register />
            </Route>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/animals/:animalId(\d+)">
                {(isAuthenticated()) ?
                    <AnimalDetail /> :
                    <Redirect to="/login" />}
            </Route>

            <Route path="/animals/:animalId(\d+)/edit">
                {(isAuthenticated()) ?
                    <AnimalEditForm /> :
                    <Redirect to="/login" />}
            </Route>

            <Route path="/employees">
                {(isAuthenticated()) ?
                    <EmployeeList /> :
                    <Redirect to="/login" />}
            </Route>

            <Route path="/customers">
                {(isAuthenticated()) ?
                    <CustomerList /> :
                    <Redirect to="/login" />}
            </Route>

            <Route exact path="/locations">
                {(isAuthenticated()) ?
                    <LocationList /> :
                    <Redirect to="/login" />}
            </Route>

            <Route path="/locations/:locationId(\d+)">
                <LocationDetail />
            </Route>

            <Route path="/animals/create">
                <AnimalForm />
            </Route>


        </>
    )
}