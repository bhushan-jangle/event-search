import React from "react"
import { connect } from "react-redux"
import {Switch, Route} from "react-router-dom"
import About from "./About"
import Event from "./Event"

function Body(props){

    return(
        <div>
            <Switch>
                    {/* <Route path = "/news"><News news={props.news}/></Route> */}
                    {/* <Route path = "/favourite-events"><FavouriteCard category="favourite-events"/></Route> */}
                    <Route path = "/favourite-events"><Event eventData={props.eventData} category="favourite-events" /></Route>
                    <Route path = "/"><Event eventData={props.eventData} category="home" /></Route>
            </Switch>
        </div>
    )
}


export default Body