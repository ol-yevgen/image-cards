import { createSlice } from "@reduxjs/toolkit";
import { cardsData } from "../../../App/data/cardsData"

const initialState = {
    cards: cardsData
}

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        cardDeleted: (state, action) => {
            state.cards = state.cards.filter(item => item.id !== action.payload)
        }
    }
})

export const { cardDeleted } = cardsSlice.actions

export default cardsSlice;