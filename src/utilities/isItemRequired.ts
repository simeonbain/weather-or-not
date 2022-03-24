import itemConstants from '../constants/itemConstants';
import conditionsConstants from '../constants/conditionsConstants';

function isItemRequired(itemName: string, temp: number, conditions: string, isDaytime = true) {
  switch (itemName) {
    case itemConstants.UMBRELLA:
      return [
        conditionsConstants.RAIN,
        conditionsConstants.DRIZZLE,
        conditionsConstants.THUNDERSTORM
      ].includes(conditions);
    case itemConstants.BEANIE:
      return temp < 18;
    case itemConstants.SUNNIES:
      return conditions === conditionsConstants.CLEAR && isDaytime;
    case itemConstants.SNOWBOARD:
      return conditions === conditionsConstants.SNOW;
    default:
      return false;
  }
}

export default isItemRequired;
