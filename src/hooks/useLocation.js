import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const useLocation = (idSearch) => {
  const [loc, setLocation] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let randomId;
    if(idSearch)
      randomId = idSearch;
    else  
      randomId = Math.floor(Math.random() * (127 - 1)) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then((response) => {
        console.log(response.data);
        setLocation(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [idSearch]);

  return [loc, loading];
};

export default useLocation;
