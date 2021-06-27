import React from "react"
import {Switch, Route} from "react-router-dom"
import About from "./About"
import Event from "./Event"

function Body(props){

    return(
        <div>
            <Switch>
                    {/* <Route path = "/news"><News news={props.news}/></Route> */}
                    <Route path = "/favourite-events"><Event category="favourite-events" /></Route>
                    <Route path = "/users"><About/></Route>
                    <Route path = "/"><Event category="home" /></Route>
            </Switch>
        </div>
    )
}

export default Body