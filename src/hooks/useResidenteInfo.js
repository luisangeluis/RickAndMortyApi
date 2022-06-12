import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';

const useResidentInfo = (url) => {
  const [character, setCharacter] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        // console.log(response.data);
        setCharacter(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return [character];
};

export default useResidentInfo;
