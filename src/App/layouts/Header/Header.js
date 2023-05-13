import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import moment from "moment";

import './header.scss'

export const Header = () => {
    //Date state at the first rendering
    const [date, setDate] = useState(moment().format('Do MMMM YYYY h:mm:ss'))

    const cards = useSelector(state => state.cards.cards)
    const cardsLength = cards.length;

    // Hook to display the date every 1 second
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(moment().format('Do MMMM YYYY h:mm:ss'))
        }, 1000)

        return () => clearInterval(interval)
    }, [date])

    return (
        <header>
            <div className="header__container">
                <span>{cardsLength + ' images'}</span>
                <span>{date}</span>
            </div>
        </header>
    )
}