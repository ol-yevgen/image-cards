import { useCallback } from 'react';
import { useDispatch } from "react-redux";

import { openCloseModal, chooseModalImage } from '../redux/features/slices/modalSlice';

export const useToggleModal = () => {
    const dispatch = useDispatch();

    const modal = useCallback((image) => {
        dispatch(openCloseModal())
        dispatch(chooseModalImage(image))
    }, [dispatch])

    return modal
}