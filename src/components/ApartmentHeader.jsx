import './ApartmentHeader.scss';

function ApartmentHeader(props) {
  console.log(props);

  const apartment = props.apartment;
  const [firstName, lastName] = apartment.host.name.split(' ');

  return (
    <div className="apartment-header">
      <div className="apartment-title">
        <h1>{apartment.title}</h1>
        <h2>{apartment.location}</h2>
        <div className="apartment-tags">
          {apartment.tags.map((tag) => (
            <span>{tag}</span>
          ))}
        </div>
      </div>
      <div className="host">
        <div className="host-details">
          <h3>
            <span>{firstName}</span>
            <span>{lastName}</span>
          </h3>
          <div>
            <img src={apartment.host.picture} alt="" className="host-badge" />
          </div>
        </div>
        <div className="host-stars">
          {[1, 2, 3, 4, 5].map((array) => (
            <i
              className={
                apartment.rating > array
                  ? 'fa-solid fa-star on'
                  : 'fa-solid fa-star'
              }
            ></i>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ApartmentHeader;
