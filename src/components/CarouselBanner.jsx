import './CarouselBanner.scss';
import { useState } from 'react';

function CarouselBanner(props) {
  const pictures = props.pictures;

  const [currentPicture, setCurrentPicture] = useState(0);

  const getClassName = (i) => {
    if (i === currentPicture) return 'visible';
    return '';
  };

  const nextPicture = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };

  const previousPicture = () => {
    const previousPicture = currentPicture - 1;
    if (previousPicture < 0) {
      setCurrentPicture(pictures.length - 1);
      return;
    }
    setCurrentPicture(currentPicture - 1);
  };

  return (
    <div className="carousel-banner">
      {pictures.length > 1 && (
        <>
          <button onClick={previousPicture} className="btn-previous">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button onClick={nextPicture} className="btn-next">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </>
      )}
      {pictures.map((pic, i) => (
        <img key={pic} src={pic} alt="" className={getClassName(i)}></img>
      ))}
    </div>
  );
}

export default CarouselBanner;
