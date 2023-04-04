import { useState } from 'react'
import CardItem from '../CardItem'

export default function CardGallery({artistData}) {
    const [card, setCard] = useState({})



    return (
    <div>
        {artistData.map((card) => {
            <CardItem card={card}/>
        })}
        
    </div>
    )
}
