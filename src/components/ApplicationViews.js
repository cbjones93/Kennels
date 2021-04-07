import React from "react"
import { Route } from "react-router-dom"
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

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route exact path="/animals">
                <AnimalList />
            </Route>

            <Route path="/animals/:animalId(\d+)">
                <AnimalDetail />
            </Route>

            <Route path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/customers">
                <CustomerList />
            </Route>

            <Route exact path="/locations">
                <LocationList />
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