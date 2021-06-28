import React,{useState, useEffect} from "react"
import { connect } from "react-redux"
import { fetchUser } from "../redux"
import EventCard from "./EventCard"
import axios from "axios"

function Event(props){

    
    return(
        <>
        {console.log(props.eventData)}
            <EventCard eventData={props.eventData} category={props.category}/>
        </>
    )
}

const mapStateToProps = (state) =>{
    return{
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchUser : (user)=> dispatch(fetchUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Event)