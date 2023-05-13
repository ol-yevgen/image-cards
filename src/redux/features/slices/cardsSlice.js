import { createSlice } from "@reduxjs/toolkit";
import { cardsData } from "../../../App/data/cardsData"

const initialState = {
    cards: cardsData
}

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {

    }
})

export default cardsSlice;