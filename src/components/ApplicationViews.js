import React from "react"
import { Route } from "react-router-dom"
import { Home } from "../Home"
// import {AnimalCard} from "../components/animal/AnimalCard"
import { AnimalList } from "./animal/AnimalList"
import {EmployeeList} from "./employees/EmployeeList"
import {CustomerList} from "./customers/customerList"
// import {LocationCard} from "./Locations/locationCard"
import { LocationList } from "./Locations/LocationList"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
              <AnimalList />
            </Route>

            <Route path ="/employees">
                <EmployeeList />
            </Route>

            <Route path ="/customers">
                <CustomerList />
            </Route>

            <Route path ="/locations">
                <LocationList />
            </Route>
    
    
    
        </>
    )
}