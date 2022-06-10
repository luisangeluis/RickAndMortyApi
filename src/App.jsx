import './App.css';
import Loader from './components/Loader';
import Locatio from './components/Locatio';
import useLocation from './hooks/useLocation';

function App() {
  const [loc, loading] = useLocation();

  return (
    <div className="App">{loading ? <Loader /> : <Locatio loc={loc} />}</div>
  );
}

export default App;
