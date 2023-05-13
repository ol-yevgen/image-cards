import { useSelector } from 'react-redux'
import { Card } from '../CardItem/Card';
import './cardList.scss';

export const CardList = () => {
    const cards = useSelector(state => state.cards.cards);

    //Render list of cards, if cardList is empty show message
    const renderCardList = (arr) => {
        if (arr.length === 0) {
            return <h2 className="cardList__title">No cards</h2>
        }

        return arr.map(({ id, ...props }) => {
            return <Card key={id} {...props} />
        })
    }

    const elements = renderCardList(cards)

    return (
        <ul className="cards">
            {elements}
        </ul>
    )
}