import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './CounterSlice';

export default configureStore({
    reducer: {
        counter:counterReducer
    }
})