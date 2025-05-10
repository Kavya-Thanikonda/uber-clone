
import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/store';

// Setup the initial state of the data layer
const initialState = {
    origin: null, // Current location
    destination: null,
    travelTimeInformation: null // Information regarding time it takes from source to destination
}

// NavSlice for user stores their navigation information - Origin, destination, etc.,
// Create the slice
export const navSlice = createSlice({
    // Slice Name
    name: 'nav',
    // Pass the initial state of the data layer
    initialState,
    // When information is pushed into data layer, it's called dispatching an action into the data layer
    reducers: {
        // Set origin action
        // When the dispatch is made from the component to the data layer, that's called an action
        // State is current state
        // Action is action dispatched (new state)
        setOrigin: (state, action) => {
            // Change the state of origin to information inside the action which is "payload"
            // When we dispatch the action "setOrigin", the value is updated into the data layer
            state.origin = action.payload;
        },
        // Set destination action
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        // Set travel time information action
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        }
    }
});

// Export the actions to the rest of the APP as nav actions
export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;

// Selectors to pull the data back from the data layer for components to use
// One selector for each selector
// Access to current state and return the state
export const selectOrigin = (state: RootState) => state.nav.origin;
export const selectDestination = (state: RootState) => state.nav.destination;
export const selectTravelTimeInformation = (state: RootState) => state.nav.travelTimeInformation;

// Export nav reducers
// Default is primary default that gets exported from the file
// This nav reducer is pulled in store and is connected to the store, setting up the store
export default navSlice.reducer;
