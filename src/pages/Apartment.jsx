import './Apartment.scss';
import Collapse from '../components/Collapse.jsx';
import CarouselBanner from '../components/CarouselBanner.jsx';
import ApartmentHeader from '../components/ApartmentHeader.jsx';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Apartment() {
  const location = useLocation();
  const [apartment, setApartment] = useState(null);
  useEffect(fetchApartmentData, []);

  function fetchApartmentData() {
    fetch('data.json')
      .then((res) => res.json())
      .then((apartments) => {
        const apartment = apartments.find(
          (apartment) => apartment.id === location.state.apartmentId
        );
        setApartment(apartment);
      })
      .catch(console.error);
  }
  if (apartment == null) return <div> Loading...</div>;

  return (
    <div className="apartment-page">
      <CarouselBanner imageUrl={apartment.cover} />
      <ApartmentHeader apartment={apartment} />
      <div className="apartment-details">
        <Collapse />
        <Collapse />
      </div>
    </div>
  );
}

export default Apartment;
