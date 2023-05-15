import { createSlice } from "@reduxjs/toolkit";
import { cardsData } from "../../../App/data/cardsData"

const initialState = {
    cards: cardsData
}

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        cardsRestore: (state, action) => {
            state.cards = action.payload
        },
        cardDeleted: (state, action) => {
            state.cards = state.cards.filter(item => item.id !== action.payload)
        }
    }
})

export const { cardsRestore, cardDeleted } = cardsSlice.actions

export default cardsSlice;