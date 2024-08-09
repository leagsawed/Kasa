import './ApartmentHeader.scss';

function ApartmentHeader({ apartment }) {
  const [firstName, lastName] = apartment.host.name.split(' ');
  const stars = [...Array(5).keys()];

  return (
    <div className="apartment-header">
      <div className="apartment-title">
        <h1>{apartment.title}</h1>
        <h2>{apartment.location}</h2>
        <div className="apartment-tags">
          {apartment.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
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
          {stars.map((num) => (
            <i
              key={num}
              className={
                apartment.rating > num
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
