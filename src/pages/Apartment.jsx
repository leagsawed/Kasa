import './Apartment.scss';
import CollapsePanel from '../components/CollapsePanel.jsx';
import CarouselBanner from '../components/CarouselBanner.jsx';
import ApartmentHeader from '../components/ApartmentHeader.jsx';
import { useApartments } from '../hooks/useApartments';

function Apartment() {
  const apartment = useApartments();

  if (apartment == null) return <div> Loading...</div>;
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
