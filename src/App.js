import React,{useState} from "react"
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

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router history={BrowserRouter}>
          <TopHeader/>
          <Header/>
          <Body />
          <Footer/>
        </Router>  
      </Provider>
    </div>
  );
}

export default App;
