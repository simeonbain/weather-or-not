import './App.css';
import Header from './components/Header';
import Today from './components/Today';
import Forecast from './components/Forecast';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="main__today">
          <Today />
        </div>
        <div className="main__divider"></div>
        <div className="main__forecast">
          <Forecast />
        </div>
      </div>
    </div>
  );
}

export default App;
