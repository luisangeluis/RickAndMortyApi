import { useEffect, useState } from 'react';
import axios from 'axios';

const useLocation = (nameToSearch) => {
  const [loc, setLocation] = useState();
  const [locs, setLocs] = useState();
  const [loading, setLoading] = useState(true);

  console.log(nameToSearch);

  useEffect(() => {
    let randomId = Math.floor(Math.random() * (127 - 1)) + 1;
    let url = `https://rickandmortyapi.com/api/location/${randomId}`;

    axios
      .get(url)
      .then((response) => {
        // console.log(response.data);
        setLocation(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (nameToSearch != undefined) {
      axios
        .get(`https://rickandmortyapi.com/api/location/?name=${nameToSearch}`)
        .then((res) => {
          console.log(res);
          setLocs(res.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [nameToSearch]);

  useEffect(() => {
    // if()
  }, [loc]);

  return [loc, setLocation, loading, locs];
};

export default useLocation;
