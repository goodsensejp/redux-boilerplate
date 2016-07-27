/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectLocationState = () => {
  let prevRoutingState;

  return (state) => {
    const routingState = state.route; // or state.route

    if (routingState !== prevRoutingState) {
      prevRoutingState = routingState;
    }

    return prevRoutingState;
  };
};

export {
  selectLocationState,
};