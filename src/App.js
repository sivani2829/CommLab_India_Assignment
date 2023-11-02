import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Learn from './components/Learn';
import Hosts from './components/Hosts';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
    <Home/>
    <Learn/>
    <Hosts/>
    <Details/>
    </div>
  );
}

export default App;
