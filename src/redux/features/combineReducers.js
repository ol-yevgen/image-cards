import { combineReducers } from '@reduxjs/toolkit';

import modalSlice from './slices/modalSlice';
import cardsSlice from './slices/cardsSlice';

const reducers = combineReducers({
    modal: modalSlice.reducer,
    cards: cardsSlice.reducer
})


export default reducers;