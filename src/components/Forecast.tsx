import { useAppSelector } from '../hooks';
import { itemSlice } from '../slices/itemSlice';

import './Forecast.css';
import ItemIcon from './ItemIcon';
import clearDayImg from '../assets/clear-day.svg';

export default function Forecast() {
  const itemName = useAppSelector((state) => state.item.name);

  return (
    <>
      <div className="day">
        <div className="day__item--active">
          <ItemIcon itemName={itemName} />
        </div>
        <h3>MONDAY</h3>
        <h2 className="day__temp">20&deg;C</h2>
        <div className="day__condition">
          <img src={clearDayImg}></img>
        </div>
      </div>
      <div className="day">
        <div className="day__item--active">
          <ItemIcon itemName={itemName} />
        </div>
        <h3>TUESDAY</h3>
        <h2 className="day__temp">20&deg;C</h2>
        <div className="day__condition">
          <img src={clearDayImg}></img>
        </div>
      </div>
      <div className="day">
        <div className="day__item--active">
          <ItemIcon itemName={itemName} />
        </div>
        <h3>WEDNESDAY</h3>
        <h2 className="day__temp">20&deg;C</h2>
        <div className="day__condition">
          <img src={clearDayImg}></img>
        </div>
      </div>
      <div className="day">
        <div className="day__item--active">
          <ItemIcon itemName={itemName} />
        </div>
        <h3>THURSDAY</h3>
        <h2 className="day__temp">20&deg;C</h2>
        <div className="day__condition">
          <img src={clearDayImg}></img>
        </div>
      </div>
      <div className="day">
        <div className="day__item--active">
          <ItemIcon itemName={itemName} />
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
