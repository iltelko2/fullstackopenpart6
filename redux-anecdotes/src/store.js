import { configureStore } from '@reduxjs/toolkit';
import anectReducer from './reducers/anecdoteReducer';
import filterReducer from './reducers/filterReducer';
import notificationReducer from './reducers/notificationReducer';

const store = configureStore({
    reducer: {
        anecdotes: anectReducer,
        filter: filterReducer,
        notification: notificationReducer
    }
})

export default store;