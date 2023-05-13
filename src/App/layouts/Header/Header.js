import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import moment from "moment";

export const Header = () => {
    // State for first render date
    const [date, setDate] = useState(moment().format('Do MMMM YYYY h:mm:ss'))
    const cards = useSelector(state => state.cards.cards)
    const cardsLength = cards.length;

    // Hook to render date every 1 second
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(moment().format('Do MMMM YYYY h:mm:ss'))
        }, 1000)

        return () => clearInterval(interval)
    }, [date])

    return (
        <header>
            <div className="header">
                <span className="cards">{cardsLength}</span>
                <span>{date}</span>
            </div>
        </header>
    )
}