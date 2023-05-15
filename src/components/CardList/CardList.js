import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Card } from '../CardItem/Card';
import { useDelete } from '../../hooks/useDelete';
import { useToggleModal } from '../../hooks/useToggleModal';
import { useRestore } from '../../hooks/useRestore';

export const CardList = () => {
    const cards = useSelector(state => state.cards.cards);
    const [cardsCopy, setCardsCopy] = useState([...cards])

    const onDelete = useDelete();
    const modal = useToggleModal();
    const restore = useRestore(cardsCopy);

    //Render list of cards, if cardList is empty show message
    const renderCardList = (arr) => {
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

    if (cards.length === 0) {
        return <section>
            <h2 className="list__title">No images</h2>
            <button
                className="restore"
                onClick={restore}
            >
                Restore
            </button>
        </section>
    }

    return (
        <section>
            <ul className="cards">
                {elements}
            </ul>
            <button
                className="restore"
                onClick={restore}
            >
                Restore
            </button>
        </section>
    )
}