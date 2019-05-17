import EventTile from './event-tile.jsx';
import ReactDOM from 'react-dom';
import React from 'react';

const showEvent = (event, element) => {
  ReactDOM.render(<EventTile event={event} />,
    element);
};

module.exports = showEvent;
