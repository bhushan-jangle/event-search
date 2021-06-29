/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
import React from 'react';
import EventCard from './EventCard';

function Event(props) {
  return (
    <>
      <EventCard eventData={props.eventData} category={props.category} />
    </>
  );
}

export default Event;
