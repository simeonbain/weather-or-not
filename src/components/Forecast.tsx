import './Forecast.css';
import umbrellaImg from '../assets/umbrella.svg';
import clearDayImg from '../assets/clear-day.svg';

export default function Forecast() {
  return (
    <>
      <div className="day">
        <div className="day__item--active">
          <img src={umbrellaImg}></img>
        </div>
        <h3>MONDAY</h3>
        <h2 className="day__temp">20&deg;C</h2>
        <div className="day__condition">
          <img src={clearDayImg}></img>
        </div>
      </div>
      <div className="day">
        <div className="day__item--active">
          <img src={umbrellaImg}></img>
        </div>
        <h3>TUESDAY</h3>
        <h2 className="day__temp">20&deg;C</h2>
        <div className="day__condition">
          <img src={clearDayImg}></img>
        </div>
      </div>
      <div className="day">
        <div className="day__item--active">
          <img src={umbrellaImg}></img>
        </div>
        <h3>WEDNESDAY</h3>
        <h2 className="day__temp">20&deg;C</h2>
        <div className="day__condition">
          <img src={clearDayImg}></img>
        </div>
      </div>
      <div className="day">
        <div className="day__item--active">
          <img src={umbrellaImg}></img>
        </div>
        <h3>THURSDAY</h3>
        <h2 className="day__temp">20&deg;C</h2>
        <div className="day__condition">
          <img src={clearDayImg}></img>
        </div>
      </div>
      <div className="day">
        <div className="day__item--active">
          <img src={umbrellaImg}></img>
        </div>
        <h3>FRIDAY</h3>
        <h2 className="day__temp">20&deg;C</h2>
        <div className="day__condition">
          <img src={clearDayImg}></img>
        </div>
      </div>
    </>
  );
}
