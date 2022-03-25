import { useAppSelector } from './hooks';
import './App.css';
import Header from './components/Header';
import StartScreen from './components/StartScreen';
import Today from './components/Today';
import Forecast from './components/Forecast';

function App() {
  const isAppInStartup = useAppSelector((state) => state.app.isAppInStartup);

  return (
    <div className="App">
      <Header />
      <div className={isAppInStartup ? 'start-screen' : 'hidden'}>
        <StartScreen />
      </div>
      <div className={isAppInStartup ? 'hidden' : 'main'}>
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
