import { EventTile } from './source/event-tile';
import ReactDOM from 'react-dom';
import React from 'react';

export const showEvent = (event, element) => {
  ReactDOM.render(<EventTile event={event} />,
    element);
};
