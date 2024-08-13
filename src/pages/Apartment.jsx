import './Apartment.scss';
import CollapsePanel from '../components/CollapsePanel.jsx';
import CarouselBanner from '../components/CarouselBanner.jsx';
import ApartmentHeader from '../components/ApartmentHeader.jsx';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchData } from '../api.jsx';

function Apartment() {
  const location = useLocation();
  const [apartment, setApartment] = useState(null);
  useEffect(() => {
    fetchData(location, setApartment);
  }, [location]);

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
