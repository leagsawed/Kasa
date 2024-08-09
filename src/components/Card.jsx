import './Card.scss';
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <div className="card">
      <Link
        to="/logement"
        state={{
          apartmentId: props.id,
        }}
      >
        <img src={props.imageUrl} alt={props.title} />
        <div className="card-title">{props.title}</div>
      </Link>
    </div>
  );
}

export default Card;
