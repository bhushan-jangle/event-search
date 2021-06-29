/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
import React from 'react';
import EventCard from './EventCard';

function Event({ eventData, category }) {
  return (
    <>
      <EventCard eventData={eventData} category={category} />
    </>
  );
}

export default Event;
