import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../Data/init';

const HotelDetails = ({ hotel }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imagesCollection = collection(firestore, 'images');
        const q = query(imagesCollection, where('hotelId', '==', hotel.id)); // Assuming 'hotelId' field in the image documents
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot)
        const imagesData = querySnapshot.docs.map(doc => doc.data().url);
        console.log(imagesData)
        setImages(imagesData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [hotel.id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section id="hotel-page" className="hotel-page">
      <div id="imgbox" className="hotel-page-imgbox">
        <img className="hotel-page-img" src={hotel.thumbnail} alt="hotel"/>
        <p className="chip">Add to favorites</p>
      </div>
      <div id="Subpage" className="hotel-page-info">
        <div id="Details">
          <p><b>Location:</b> {hotel.location}</p>
          <p><b>Local Category:</b> {'★'.repeat(hotel.stars)}</p>
          <p><b>Price:</b> {hotel.price}$/room/night</p>
          <p><b>Description:</b><br/>{hotel.text}</p>
        </div>
        <br />
        <br />
        <div className='hotel-page-btnbox'>
            <button onClick={() => console.log('Contact us')} className="button primary">Contact us ✉</button>
            <div id="Hotel Imagebox" className="hotel-page-info-imgbox">
              {images.map((image, index) => (
                <img key={index} className="hotel-page-info-img" src={image} alt={`hotel-${index}`} />
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default HotelDetails;