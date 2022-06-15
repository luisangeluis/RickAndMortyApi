import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useLocationName = (name) => {
  const [loc, setLoc] = useState();
  let load = undefined;
  useEffect(() => {
    if (name != undefined && name.length > 0) {
      axios
        .get(`https://rickandmortyapi.com/api/location/?name=${name}`)
        .then((res) => {
          console.log(res.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [name]);

  return [loc, load];
};

export default useLocationName;
