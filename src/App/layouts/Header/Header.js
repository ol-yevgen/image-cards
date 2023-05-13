import { useState } from 'react';
import { useSelector } from "react-redux";

export const Header = () => {
    const [date, setDate] = useState()
    const cards = useSelector(state => state.cards.cards)
    const cardsLength = cards.length

    return (
        <header>
            <div className="header">
                <span className="cards">{cardsLength}</span>
                <span></span>
            </div>
        </header>
    )
}