import axios from "axios"
import { GET_USER } from "./actionType"

export const getUser = (users) =>{
    return{
        type: GET_USER,
        payload: users
    }
}

// export const fetchUser = () =>{
//     return function(dispatch){
//         axios.get(`https://jsonplaceholder.typicode.com/users`)
//             .then((result)=>{
//                 dispatch(getUser(result.data))
//             })  
//     }
// }

export const fetchUser = () =>{
    return function(dispatch){
        axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=BJaOHw9WmOkb5FHM6X7LH6yJoxzkcXiA`)
            .then((result)=>{
                dispatch(getUser(result.data))
            })  
    }
}

//https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=BJaOHw9WmOkb5FHM6X7LH6yJoxzkcXiA

// export const fetchUser = () =>{
//     return function(dispatch){
//         //userfetchreq
//         // dispatch(FetchUserRequest())
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//             .then((res)=>{
//                 //res.data is result of users array
//                 //userfetchresp
//                 dispatch(getUser(res.data))
//             })
//             .catch((error)=>{
//                 //error.message is error
//                 //userfetcherror
//                 // dispatch(FetchUserError(error.message))
//             })
//     }
// }