import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const useLocation = () => {
  const [loc, setLocation] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const randomId = Math.floor(Math.random() * (127 - 1)) + 1;
    console.log(typeof randomId);
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then((response) => {
        console.log(response.data);
        setLocation(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return [loc, loading];
};

export default useLocation;
