import { v4 as uuidv4 } from 'uuid';

import Img1 from '../assets/images/1.jpg';
import Img2 from '../assets/images/2.jpg';
import Img3 from '../assets/images/3.jpg';
import Img4 from '../assets/images/4.jpg';
import Img5 from '../assets/images/5.jpg';
import Img6 from '../assets/images/6.jpg';
import Img7 from '../assets/images/7.jpg';
import Img8 from '../assets/images/8.jpg';
import Img9 from '../assets/images/9.jpg';
import Img10 from '../assets/images/10.jpg';
import Img11 from '../assets/images/11.jpg';
import Img12 from '../assets/images/12.jpg';

export const cardsData = [
    {
        id: uuidv4(),
        image: Img1
    },
    {
        id: uuidv4(),
        image: Img2
    },
    {
        id: uuidv4(),
        image: Img3
    },
    {
        id: uuidv4(),
        image: Img4
    },
    {
        id: uuidv4(),
        image: Img5
    },
    {
        id: uuidv4(),
        image: Img6
    },
    {
        id: uuidv4(),
        image: Img7
    },
    {
        id: uuidv4(),
        image: Img8
    },
    {
        id: uuidv4(),
        image: Img9
    },
    {
        id: uuidv4(),
        image: Img10
    },
    {
        id: uuidv4(),
        image: Img11
    },
    {
        id: uuidv4(),
        image: Img12
    },
]

export const data = localStorage.getItem('cards') !== null ? JSON.parse(localStorage.getItem(('cards'))) : cardsData
