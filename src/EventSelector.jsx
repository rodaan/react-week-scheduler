import React from 'react';

export default function EventSelector({ events, selectedEvent, selectEvent, legendTitle }) {
  const onRadioClick = eventSelected => () => {
    selectEvent(eventSelected);
  };
  const title = legendTitle || 'Events: ';
  return (
    <fieldset id="EventSelector">
      <legend>{title}</legend>
      <div className="legend-body">
        {events.map(event => (
          <div className="radio-item" key={event.event}>
            <input
              type="radio"
              name="eventSelect"
              id={`eventSelect${event.event}`}
              value={event.event}
              defaultChecked={selectedEvent.event === event.event}
              onClick={onRadioClick(event)}
            />
            <label className="radio-label" htmlFor={`eventSelect${event.event}`}>
              {event.event}
            </label>
            <div className="legend-color" style={{ backgroundColor: event.color }} />
          </div>
        ))}
      </div>
    </fieldset>
  );
}
