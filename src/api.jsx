export function fetchData(location, setState) {
  fetch('data.json')
    .then((res) => res.json())
    .then((data) => {
      if (location.pathname === '/') {
        setState(data);
      } else if (location.pathname === '/logement') {
        const apartment = data.find(
          (apartment) => apartment.id === location.state.apartmentId
        );
        setState(apartment);
      }
    })
    .catch(console.error);
}
