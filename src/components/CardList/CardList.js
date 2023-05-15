import { useSelector } from 'react-redux';

import { Card } from '../CardItem/Card';
import { useDelete } from '../../hooks/useDelete';
import { useToggleModal } from '../../hooks/useToggleModal';

export const CardList = () => {
    const cards = useSelector(state => state.cards.cards);
    const onDelete = useDelete();
    const modal = useToggleModal();

    if (cards.length === 0) {
        return <>
            <h2 className="cardList__title">No images</h2>
            <button className="restore">Restore</button>
        </>
    }

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

    return (
        <section>
            <ul className="cards">
                {elements}
            </ul>
            <button className="restore">Restore</button>
        </section>
    )
}