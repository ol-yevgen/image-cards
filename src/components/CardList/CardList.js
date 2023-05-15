import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card } from '../CardItem/Card';
import { cardDeleted } from '../../redux/features/slices/cardsSlice';
import { openCloseModal, chooseModalImage } from '../../redux/features/slices/modalSlice';

export const CardList = () => {
    const cards = useSelector(state => state.cards.cards);

    const dispatch = useDispatch();

    const modal = useCallback((image) => {
        dispatch(openCloseModal())
        dispatch(chooseModalImage(image))
    }, [dispatch])

    const onDelete = useCallback(id => {
        dispatch(cardDeleted(id))

    }, [dispatch]);

    //Render list of cards, if cardList is empty show message
    const renderCardList = (arr) => {
        if (arr.length === 0) {
            return <h2 className="cardList__title">No cards</h2>
        }

        return arr.map(({id, image}) => {
            return <Card
                key={id}
                image={image}
                modal={() => modal(image)}
                onDelete={() => onDelete(id)}
            />
        })
    }

    const elements = renderCardList(cards)

    return (
        <ul className="cards">
            {elements}
        </ul>
    )
}