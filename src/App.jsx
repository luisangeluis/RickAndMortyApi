import { useState } from 'react';
import './App.css';
import Loader from './components/Loader';
import Locatio from './components/Locatio';
import ResidentInfo from './components/ResidentInfo';
import ResidentList from './components/ResidentList';
import SearchLocation from './components/SearchLocation';
import SearchLocationName from './components/SearchLocationName';
import useLocation from './hooks/useLocation';
import useLocationName from './hooks/useLocationName';

function App() {
  const [idSearch, setIdSearch] = useState();
  const [nameSearch, setNameSearch] = useState();
  const [loc, loading] = useLocation(idSearch);
  const [locName, load] = useLocationName(nameSearch);

  return (
    <div className="App">
      <header className="header">
        <div className="container-fluid py-2 py-md-3">
          <SearchLocation setIdSearch={setIdSearch} />
        </div>
        <div className="container-fluid py-2 py-md-3">
          <SearchLocationName setNameSearch={setNameSearch} />
        </div>
      </header>
      <div className="container pb-2 pb-md-3">
        {loading ? <Loader /> : <Locatio loc={loc} />}
        {loc && <ResidentList loc={loc} />}
      </div>
    </div>
  );
}

export default App;
