import { useEffect, useState } from 'react';
import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [location, setLocation] = useState();
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

  return (
    <div className="App">
      {loading ? <Loader /> : <Location location={location} />}
    </div>
  );
}

export default App;
