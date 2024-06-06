const HotelCard = ({ hotel }) => {
  console.log(hotel)
  return (
    <article className="hotel-card">
        
      <img className="card-image" src={hotel.thumbnail} alt="hotel"/>
      <p className="text-middle">{hotel.name}</p>
      <p className="text-small">{hotel.text}</p>
      <div className="hotel-card-footer">
        <p className="text-middle">{'★'.repeat(hotel.stars)}</p>
        <p className="text-middle">{hotel.price}€/room</p>
      </div>
    </article>
  );
};

export default HotelCard;

// 