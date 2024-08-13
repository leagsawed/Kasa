import './Apartment.scss';
import CollapsePanel from '../components/CollapsePanel.jsx';
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
  console.log(apartment);
  return (
    <div className="apartment-page">
      <CarouselBanner pictures={apartment.pictures} />
      <ApartmentHeader apartment={apartment} />
      <div className="apartment-details">
        <CollapsePanel title="Description" content={apartment.description} />
        <CollapsePanel
          title="Équipements"
          content={apartment.equipments.map((eq, index) => (
            <li key={index}>{eq}</li>
          ))}
        />
      </div>
    </div>
  );
}

export default Apartment;
