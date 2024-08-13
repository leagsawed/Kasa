import './Gallery.scss';
import Card from '../components/Card.jsx';
import { useState, useEffect } from 'react';
import { fetchData } from '../api.jsx';
import { useLocation } from 'react-router-dom';

function Gallery() {
  const location = useLocation();
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetchData(location, setApartments);
  }, [location]);

  return (
    <div className="gallery">
      {apartments.slice(0, 6).map((apartment, index) => (
        <Card
          key={index}
          title={apartment.title}
          imageUrl={apartment.cover}
          id={apartment.id}
        />
      ))}
    </div>
  );
}

export default Gallery;
