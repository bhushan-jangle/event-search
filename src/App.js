import React,{useEffect, useState} from "react"
import {Button} from "react-bootstrap"
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {BrowserRouter, BrowserRouter as Router} from "react-router-dom"
import "./components/comp.css"
import { Provider } from "react-redux";
import { store } from "./redux/store";
import TopHeader from "./components/TopHeader"
import Notification from "./components/Notification"
import EventCard from "./components/EventCard"
import axios from "axios"

function App() {
  const[Events, setEvents] = useState([]);
  const APIKEY = process.env.REACT_APP_DISCOVERY_API_KEY;
  console.log(APIKEY)

  // useEffect(()=>{
  //     fetch(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=${APIKEY}`)
  //       .then((result)=> result.json())
  //       .then((res)=>setEvents(res._embedded.events))
  //       .catch((err)=> console.log(err))
  // },[])

  useEffect(()=>{
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=${APIKEY}`)
    .then((result)=>setEvents(result.data._embedded.events)) 
},[])

  return (
    <div>
      <Provider store={store}>
        <Router history={BrowserRouter}>
          <TopHeader/>
          <Header/>
          {/* <Body eventData={Events}/> */}
          <Body eventData={Events}/>
          <Footer/>
        </Router>  
      </Provider>
    </div>
  );
}

export default App;
