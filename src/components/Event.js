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
