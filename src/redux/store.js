import { configureStore } from '@reduxjs/toolkit';
import cards from './features/cardsSlice';

export const store = configureStore({
    reducer: {cards},
})