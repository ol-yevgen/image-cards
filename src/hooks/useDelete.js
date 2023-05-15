import { useCallback } from 'react';
import { useDispatch } from "react-redux";

import { cardDeleted } from '../redux/features/slices/cardsSlice';

export const useDelete = (id) => {
    const dispatch = useDispatch();

    const onDelete = useCallback(id => {
        dispatch(cardDeleted(id))
    }, [dispatch]);

    return onDelete
}