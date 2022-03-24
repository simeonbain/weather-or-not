import clearDayImg from '../assets/clear-day.svg';
import clearNightImg from '../assets/clear-night.svg';
import drizzleImg from '../assets/drizzle.svg';
import dustImg from '../assets/dust-wind.svg';
import hazeImg from '../assets/haze.svg';
import mistImg from '../assets/mist.svg';
import partlyCloudyDayImg from '../assets/partly-cloudy-day.svg';
import partlyCloudyNightImg from '../assets/partly-cloudy-night.svg';
import rainImg from '../assets/rain.svg';
import ashImg from '../assets/smoke-particles.svg';
import smokeImg from '../assets/smoke.svg';
import snowImg from '../assets/snow.svg';
import thunderstormImg from '../assets/thunderstorms-rain.svg';
import tornadoImg from '../assets/tornado.svg';
import windImg from '../assets/wind.svg';
import notAvailableImg from '../assets/not-available.svg';
import conditionsConstants from '../constants/conditionsConstants';

interface ConditionsIconProps {
  conditionsName: string;
  isDaytime?: boolean;
}

export default function ConditionsIcon(props: ConditionsIconProps) {
  const { conditionsName, isDaytime } = props;

  const getImage = (conditionsName: string, isDaytime = true) => {
    switch (conditionsName) {
      case conditionsConstants.CLEAR:
        if (isDaytime) {
          return clearDayImg;
        } else {
          return clearNightImg;
        }
        break;
      case conditionsConstants.CLOUDS:
        if (isDaytime) {
          return partlyCloudyDayImg;
        } else {
          return partlyCloudyNightImg;
        }
      case conditionsConstants.DRIZZLE:
        return drizzleImg;
      case conditionsConstants.DUST:
        return dustImg;
      case conditionsConstants.FOG:
        return mistImg;
      case conditionsConstants.HAZE:
        return hazeImg;
      case conditionsConstants.MIST:
        return mistImg;
      case conditionsConstants.RAIN:
        return rainImg;
      case conditionsConstants.ASH:
        return ashImg;
      case conditionsConstants.SAND:
        return dustImg;
      case conditionsConstants.SMOKE:
        return smokeImg;
      case conditionsConstants.SNOW:
        return snowImg;
      case conditionsConstants.SQUALL:
        return windImg;
      case conditionsConstants.THUNDERSTORM:
        return thunderstormImg;
      case conditionsConstants.TORNADO:
        return tornadoImg;
      case conditionsConstants.WIND:
        return windImg;
      default:
        return notAvailableImg;
    }
  };

  return (
    <>
      <img
        src={isDaytime ? getImage(conditionsName, isDaytime) : getImage(conditionsName)}
        alt={conditionsName}
      ></img>
    </>
  );
}
