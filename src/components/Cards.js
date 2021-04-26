import React, {useState} from 'react'
import Card from './Card';



export default function Cards() {

    const [cardsData, setCardsData] = useState([
        {
            cardTitle: 'Cute 😻',
            img: 'https://i.pinimg.com/736x/30/22/56/30225631c7040d597f562a6eb406cb09.jpg',
        },

        {
            cardTitle: 'Shelby 😍',
            img: 'https://www.tuningblog.eu/wp-content/uploads/2021/02/Vollcarbon-Shelby-GT500CR-Ford-Mustang-Replika-Tuning-1.jpg',
        },

    ]);
    return (
        <div className="Cards">
            <h2>Cards Form 🗃️</h2>
            <form>
                <h3>Forms </h3>
            </form>
            <div>
                <h3>Cards</h3>

                {cardsData.map((cardItem, indexItem) => (
                     <Card key = {indexItem} cardObject = {cardItem} />
                ))}
                
            </div>
        </div>
    )
}

