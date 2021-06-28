/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setNewsDetailsShowAlways } from '../redux/NewsDetails/NewsDetailsAction';
import './comp.css';

function Header(props) {
  return (
    <div className="HeaderNavbar">
      <Navbar bg="light" expand="lg">
        {/* <Navbar.Brand href="#home">Quick-Hunt</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/" onClick={props.setNewsDetailsShowAlways}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/favourite-events" onClick={props.setNewsDetailsShowAlways}>Favourite Events</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isShowNewsDetails: state.newsDetails.isShowNewsDetails,
});

const mapDispatchToProps = (dispatch) => ({
  setNewsDetailsShowAlways: () => dispatch(setNewsDetailsShowAlways()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
