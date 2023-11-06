import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import formatDate from '../utility/formatDate';
const EventDetails = ({ eventData }) => {
  return (
    <Link to={`/EventPage?id=${eventData._id}`}>
      <div style={{ border: '1px solid black', padding: '10px', backgroundColor: 'white', width: '300px' }}>
        <h1>{eventData.EventName}</h1>
        <div> 
          <p><strong>Details:</strong> {eventData.EventDetails}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <p><strong>Event Date:</strong> {formatDate(eventData.EventDate)}</p>
            </div>
            <div>
              <p><strong>End of Sale:</strong> {formatDate(eventData.EndOfSale)}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventDetails;
