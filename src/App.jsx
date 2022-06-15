import { useState } from 'react';
import './App.css';
import Loader from './components/Loader';
import Locatio from './components/Locatio';
import ResidentInfo from './components/ResidentInfo';
import ResidentList from './components/ResidentList';
import SearchLocation from './components/SearchLocation';
import useLocation from './hooks/useLocation';

function App() {
  const [idSearch, setIdSearch] = useState();
  const [loc, loading] = useLocation(idSearch);

  return (
    <div className="App">
      <header className="header">
        <div className="container-fluid py-2 py-md-3">
          <SearchLocation setIdSearch={setIdSearch} />
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
