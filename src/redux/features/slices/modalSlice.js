import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modal: false,
    modalImage: ''
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openCloseModal: (state) => {
            state.modal = !state.modal
        },
        chooseModalImage: (state, action) => {
            state.modalImage = action.payload
        }

    }
})

export const { openCloseModal, chooseModalImage } = modalSlice.actions

export default modalSlice;