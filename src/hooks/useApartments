import { useState, useEffect } from 'react';
import { fetchData } from '../api.jsx';
import { useLocation } from 'react-router-dom';

export const useApartments = () => {
  const location = useLocation();
  const [state, setState] = useState(location.pathname === '/' ? [] : null);
  useEffect(() => {
    const abortController = new AbortController();
    fetchData(location, setState, abortController);

    return () => {
      abortController.abort();
    };
  }, [location]);
  return state;
};
