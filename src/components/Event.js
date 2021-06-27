import React from "react"
import EventCard from "./EventCard"

function Event(props){

    return(
        <>
            <EventCard category={props.category}/>
        </>
    )
}

export default Event