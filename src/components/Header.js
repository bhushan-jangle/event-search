import React from "react"
import {Navbar, Nav} from "react-bootstrap"
import {NavLink } from "react-router-dom"
import "./comp.css"
import { connect } from "react-redux"
import { setNewsDetailsShowAlways } from "../redux/NewsDetails/NewsDetailsAction"

function Header(props){
    return( 
          <div className="HeaderNavbar">
            <Navbar bg="light" expand="lg">
                {/* <Navbar.Brand href="#home">Quick-Hunt</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" >             
                    <Nav.Link as={NavLink} to="/" onClick={props.setNewsDetailsShowAlways} >Home</Nav.Link>       
                    <Nav.Link as={NavLink} to="/favourite-events" onClick={props.setNewsDetailsShowAlways}>Favourite Events</Nav.Link>
                   </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        isShowNewsDetails : state.newsDetails.isShowNewsDetails
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        setNewsDetailsShowAlways: ()=> dispatch( setNewsDetailsShowAlways())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Header)