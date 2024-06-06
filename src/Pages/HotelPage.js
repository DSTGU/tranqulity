import React, { useEffect, useState } from 'react';
import HotelDetails from './HotelDetails';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../Data/init';

const HotelPage = () => {
  //const { hotelId } = useParams();
  //const [hotel, setHotel] = useState(null);

  const { hotelId } = useParams();

  const fetchHotelById = async (id) => {
    const docRef = doc(firestore, 'hotels', id);
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log('No such document!');
      return null;
    }

  };

  useEffect(() => {
    const loadHotel = async () => {
      const hotelData = await fetchHotelById(hotelId);
      setHotel(hotelData);
      setLoading(false);
    };
    loadHotel();
  }, [hotelId]);

  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);

  if (!hotel) {
    return <p>Hotel not found</p>;
  }

  if (!hotel) return <div>Loading...</div>;

  return (
    <div className='hotel-page-container'>
        <div id="header" className='hotel-page-header'>
            <Link to={`/`}>
                <button className='button'>Back</button>
            </Link>

            <p className="title-middle">{hotel.name}</p>
        </div>
        <HotelDetails hotel={hotel} />
    </div>
  );
};

export default HotelPage;