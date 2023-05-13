import { configureStore } from '@reduxjs/toolkit';
import reducers from './features/combineReducers';

export const store = configureStore({
    reducer: reducers,
})