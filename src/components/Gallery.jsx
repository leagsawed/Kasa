import './Gallery.scss';
import Card from '../components/Card.jsx';
import { useApartments } from '../hooks/useApartments';

function Gallery() {
  const apartments = useApartments();

  return (
    <div className="gallery">
      {apartments.slice(0, 6).map((apartment) => (
        <Card
          key={apartment.id}
          title={apartment.title}
          imageUrl={apartment.cover}
          id={apartment.id}
        />
      ))}
    </div>
  );
}

export default Gallery;
