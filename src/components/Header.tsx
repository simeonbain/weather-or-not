import './Header.css';
import ItemsDropdown from './ItemsDropdown';
import LocationInput from './LocationInput';

export default function Header() {
  return (
    <>
      <div className="header__top">
        <div className="header__title">
          <h1>WEATHER OR NOT</h1>
          <div className="header__subtitle">
            <p>
              to bring <br />
              your <b>umbrella</b>
            </p>
          </div>
        </div>
        <div className="header__items">
          <ItemsDropdown />
        </div>
      </div>
      <div className="header__bottom">
        <LocationInput />
      </div>
    </>
  );
}
