import './App.css';
import Loader from './components/Loader';
import Locatio from './components/Locatio';
import ResidentInfo from './components/ResidentInfo';
import useLocation from './hooks/useLocation';

function App() {
  const [loc, loading] = useLocation();

  return (
    <div className="App">
      {/* LOCATION */}
      {loading ? <Loader /> : <Locatio loc={loc} />}
      {/* RESIDENTS */}
      <div className="container">
        <div className="row">
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
  );
}

export default App;
