import umbrellaImg from '../assets/umbrella.svg';
import beanieImg from '../assets/beanie.svg';
import sunniesImg from '../assets/sunglasses.svg';
import snowboardImg from '../assets/snowboard.svg';
import itemConstants from '../constants/itemConstants';

interface ItemIconProps {
  itemName: string;
}

export default function ItemIcon(props: ItemIconProps) {
  const { itemName } = props;

  const getImage = (itemName: string) => {
    switch (itemName) {
      case itemConstants.UMBRELLA:
        return umbrellaImg;
      case itemConstants.BEANIE:
        return beanieImg;
      case itemConstants.SUNNIES:
        return sunniesImg;
      case itemConstants.SNOWBOARD:
        return snowboardImg;
      default:
        return umbrellaImg;
    }
  };

  return (
    <>
      <img src={getImage(itemName)} alt={itemName}></img>
    </>
  );
}
