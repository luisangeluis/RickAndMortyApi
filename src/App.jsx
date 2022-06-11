import { useState } from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron';
import Loader from './components/Loader';
import Locatio from './components/Locatio';
import ResidentInfo from './components/ResidentInfo';
import SearchLocation from './components/SearchLocation';
import useLocation from './hooks/useLocation';

function App() {

  const [idSearch, setIdSearch] = useState(0);
  const [loc, loading] = useLocation(idSearch);

  return (
    <div className="App">
      <header className='header'>
        <div className="container-fluid">
          <Jumbotron>
          </Jumbotron>
        </div>
      </header>
      <div className="container pb-2 pb-md-3">
        <SearchLocation setIdSearch={setIdSearch} />
        {loading ? <Loader /> : <Locatio loc={loc} />}
        {/* Residents */}
        <div className="row">
          <div className="col-12 residents">
            <div className="container residents-container">
              <div className="row justify-content-center ">
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
