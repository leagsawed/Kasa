import './CarouselBanner.scss';

function CarouselBanner(props) {
  return (
    <div className="carousel-banner">
      <img src={props.imageUrl}></img>
    </div>
  );
}

export default CarouselBanner;
