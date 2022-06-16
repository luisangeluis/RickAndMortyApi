import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useLocationName = (name) => {
  const [loc, setLoc] = useState();
  let load = undefined;

  useEffect(() => {
    if (name != undefined) name = name.replace(/ /g, '');
    console.log(name);
    if (name) {
      axios
        .get(`https://rickandmortyapi.com/api/location/?name=${name}`)
        .then((res) => {
          console.log(res.data.results);
          setLoc(res.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [name]);

  return [loc, load];
};

export default useLocationName;
