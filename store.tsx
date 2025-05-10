
// Setup the data layer
import { configureStore } from '@reduxjs/toolkit';

// Data layer separated into different layers
import navReducer from './slices/navSlices';

export const store = configureStore({
    // Reducer - Setting up the store
    reducer: {
        // Connect it to navigation slices
        nav: navReducer,
    }
});

// TypeScript is just asking for type annotations to avoid those "implicitly has 'any'" warnings.
export type RootState = ReturnType<typeof store.getState>;
