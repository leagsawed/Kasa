import './Banner.scss';

function Banner(props) {
  return (
    <div className="banner">
      <img src={props.image} alt="" />
      <h1>{props.title}</h1>
    </div>
  );
}

export default Banner;
