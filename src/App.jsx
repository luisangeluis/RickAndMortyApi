import { useState } from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron';
import Loader from './components/Loader';
import Locatio from './components/Locatio';
import ResidentInfo from './components/ResidentInfo';
import SearchLocation from './components/SearchLocation';
import useLocation from './hooks/useLocation';

function App() {

  const [idSearch, setIdSearch] = useState();
  const [loc, loading] = useLocation(idSearch);

  console.log(idSearch);

  return (
    <div className="App">
      <header className='header'>
        <div className="container-fluid py-2 py-md-3">
          <SearchLocation setIdSearch={setIdSearch} />
        </div>
      </header>
      <div className="container pb-2 pb-md-3">
        {loading ? <Loader /> : <Locatio loc={loc} />}
        {/* Residents */}
        <div className="row">
          <div className="col-12 residents">
            <div className="container residents-container">
              <div className="row justify-content-start">
                {loc ? (
                  loc.residents.map((resident) => {
                    return <ResidentInfo url={resident} key={resident} />;
                  })
                ) : (
                  <Loader />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
