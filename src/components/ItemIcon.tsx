import umbrellaImg from '../assets/umbrella.svg';
import beanieImg from '../assets/beanie.svg';
import sunniesImg from '../assets/sunglasses.svg';
import snowboardImg from '../assets/snowboard.svg';

interface ItemIconProps {
  itemName: string;
}

export default function ItemIcon(props: ItemIconProps) {
  const { itemName } = props;

  const getImage = (itemName: string) => {
    switch (itemName) {
      case 'umbrella':
        return umbrellaImg;
      case 'beanie':
        return beanieImg;
      case 'sunnies':
        return sunniesImg;
      case 'snowboard':
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
