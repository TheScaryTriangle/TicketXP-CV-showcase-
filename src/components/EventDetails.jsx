import React from 'react';

const EventDetails = () => {
  const eventData = {
    EventName: "Test1",
    EventDetails: "Test details",
    EventDate: "2023-10-28T00:00:00.000Z",
    EndOfSale: "2023-10-26T00:00:00.000Z",
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getHours()}`;
  };

  return (
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
  );
};

export default EventDetails;
