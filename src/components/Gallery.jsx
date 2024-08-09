import './Gallery.scss';
import Card from '../components/Card.jsx';
import { useState, useEffect } from 'react';

function Gallery() {
  const [apartments, setApartements] = useState([]);

  useEffect(fetchApartments, []);

  function fetchApartments() {
    fetch('data.json')
      .then((res) => res.json())
      .then((res) => setApartements(res))
      .catch(console.error);
  }

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
