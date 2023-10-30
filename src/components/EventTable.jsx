import React, { useEffect, useState } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import eventModule from '../api/eventModule';

/**
 * @dev Used to display all the current vendors for the CRM
 * @todo put in a confirmation modal for delete
 */
const EventTable = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        setup();
    }, []);

    const setup = async () => {
        try {
            const eventAPIData = await eventModule.getAllEventDetails();
            console.log(eventAPIData)
            setEvents(eventAPIData)
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
                {events.map((event) => (
                    <li key={event._id}>
                        <strong>{event.EventName}</strong>
                        <p>{event.TicketPrice ? `£${event.TicketPrice}` : "Free"}</p>
                    </li>
                ))}
        </div>
    );
};

export default EventTable;
