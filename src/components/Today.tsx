import './Today.css';
import clearDayImg from '../assets/clear-day.svg';

export default function Today() {
  return (
    <div className="today">
      <div className="today__icon">
        <img src={clearDayImg}></img>
      </div>
      <h2>Yes &nbsp; | &nbsp; It's 20 &deg;C and clear</h2>
      <div className="today__divider"></div>
      <div className="today__minmax">
        <div className="today__minmax__min">
          <h3>MIN</h3>
          <h2>10&deg;C</h2>
        </div>
        <div className="today__minmax__max">
          <h3>MAX</h3>
          <h2>20&deg;C</h2>
        </div>
      </div>
    </div>
  );
}
