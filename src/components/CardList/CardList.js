import { useSelector } from 'react-redux'
import { Card } from '../CardItem/Card';
import './cardList.scss';
import { openCloseModal, chooseModalImage } from '../../redux/features/slices/modalSlice';

export const CardList = () => {
    const cards = useSelector(state => state.cards.cards);
    const modalImage = useSelector(state => state.modal.modal)

    //Render list of cards, if cardList is empty show message
    const renderCardList = (arr) => {
        if (arr.length === 0) {
            return <h2 className="cardList__title">No cards</h2>
        }

        return arr.map(({ id, ...props }) => {
            return <Card
                key={id}
                {...props}
                modalImage={modalImage}
                openCloseModal={openCloseModal}
                chooseModalImage={chooseModalImage}
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