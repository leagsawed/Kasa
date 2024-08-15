export function fetchData(location, setState, abortController) {
  fetch('data.json', { signal: abortController.signal })
    .then((res) => res.json())
    .then((data) => {
      if (!abortController.signal.aborted) {
        if (location.pathname === '/') {
          setState(data);
        } else if (location.pathname === '/logement') {
          const apartment = data.find(
            (apartment) => apartment.id === location.state.apartmentId
          );
          setState(apartment);
        }
      }
    })
    .catch((err) => {
      if (err.name !== 'AbortError') {
        console.error(err);
      }
    });
}
