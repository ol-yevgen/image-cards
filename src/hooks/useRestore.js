import { useCallback } from 'react';
import { useDispatch } from'react-redux';
import { cardsRestore } from '../redux/features/slices/cardsSlice';

export const useRestore = (cardsCopy) => {
    const dispatch = useDispatch()

    const restore = useCallback(() => {
        dispatch(cardsRestore(cardsCopy))
    }, [dispatch, cardsCopy])

    return restore
}
