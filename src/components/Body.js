/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Event from './Event';

function Body(props) {
  return (
    <>
      <Switch>
        <Route path="/favourite-events"><Event eventData={props.eventData} category="favourite-events" /></Route>
        <Route path="/"><Event eventData={props.eventData} category="home" /></Route>
      </Switch>
    </>
  );
}

export default Body;
