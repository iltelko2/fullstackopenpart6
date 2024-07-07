import { configureStore } from '@reduxjs/toolkit';
import anectReducer from './reducers/anecdoteReducer';
import filterReducer from './reducers/filterReducer';

const store = configureStore({
    reducer: {
        anecdotes: anectReducer,
        filter: filterReducer,
    }
})

export default store;