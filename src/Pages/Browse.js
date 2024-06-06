import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../Data/init';
import HotelCard from '../Components/HotelCard';
import arrow from '../Assets/Arrow.svg';

const Browse = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHotels = async () => {
    const hotelsCollection = collection(firestore, 'hotels');
    const hotelSnapshot = await getDocs(hotelsCollection);
    const hotelList = hotelSnapshot.docs.map(doc => ({
      id: doc.id, // Firestore document ID
      ...doc.data() // Firestore document data
    }));
    return hotelList;
  };

  useEffect(() => {
    const loadHotels = async () => {
      const hotelsData = await fetchHotels();
      setHotels(hotelsData);
      setLoading(false);
    };
    loadHotels();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section id="browse" className="browse-section">
      <p className="title-middle">Explore the hotels</p>
      <input className="searchbar" placeholder="Search by hotel name, place etc." />
      <section className="grid hotel-cards">
        {hotels.map((hotel) => (
          <Link to={`/hotel/${hotel.id}`} key={hotel.id}>
            <HotelCard hotel={hotel} />
          </Link>
        ))}
      </section>
      <button className="button secondary">Find more <img src={arrow} alt="arrow" /></button>
    </section>
  );
};

export default Browse;