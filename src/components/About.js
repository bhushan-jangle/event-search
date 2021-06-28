import React,{useState, useEffect} from "react"
import { connect } from "react-redux"
import { fetchUser } from "../redux"

function About(props){

    useEffect(()=>{
        getUserDetails()
        console.log(props)
    },[])

    const getUserDetails = () =>{
        // props.fetchUser();
    }

    return(
        <div>
            <p>Users</p>
            {props.eventData._embedded.events.map((item)=>
                <p>{item.name}</p>
            )}

            {/* <button onClick={props.fetchUser}>Get Users</button> */}
            {/* {props.fetchUser()} */} 
            {/* {console.log(props.users)}
            {props.users._embedded.events.map((item)=>
                <p>{item.name}</p>
            )} */}
            {/* {props.users.map((user)=>
                {user.map((us)=>
                    <h1>{us.name}</h1>
                ) }
            )} */}
            {/* {props.users._embedded.events.map((item)=>
            <div>
                {console.log(item)}
                <h2>{item.name}</h2>
            </div>
                
            )} */}
           {/* {eventData.map((user)=>
           <div key={user.id}>
               <p>{user.id}</p>
               <p>{user.name}</p>
               <hr/>
            </div>
           )} */}
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps) (About)