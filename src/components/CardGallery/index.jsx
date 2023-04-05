import { useState } from 'react'
import CardItem from '../CardItem'

export default function CardGallery({artistData}) {
    const [card, setCard] = useState({})



    return (
        <div className='card-gallery'>
            
            {artistData.map((card, i) => <CardItem card={card} key={i}/>)}
           
        </div>
    )
}
