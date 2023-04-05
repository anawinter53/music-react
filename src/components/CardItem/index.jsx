

export default function CardItem({card}) {

  return (
    <div className='card-item'>
        <img src={card.img_url} />
        <h2>{card.name}</h2>
        <h3>{card.artist}</h3>
        <h3>{card.album}</h3>
    </div>
  )
}


