import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { changeItem } from '../slices/itemSlice';

import itemConstants from '../constants/itemConstants';

import './ItemsDropdown.css';
import ItemIcon from './ItemIcon';

export default function ItemsDropdown() {
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);
  const [itemsArr, setItemsArr] = useState([
    itemConstants.UMBRELLA,
    itemConstants.BEANIE,
    itemConstants.SUNNIES,
    itemConstants.SNOWBOARD
  ]);

  const item = useAppSelector((state) => state.item.name);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    const selectedItem = event.currentTarget.dataset.item;
    const isDesktop = window.matchMedia('(min-width: 650px)').matches;

    if (isDesktop) {
      if (selectedItem) {
        dispatch(changeItem(selectedItem));
      }
      setOpen(false);
    } else {
      if (open) {
        if (selectedItem) {
          dispatch(changeItem(selectedItem));
        }
      }

      const newItemsArr = itemsArr.slice().sort((item) => {
        return item === selectedItem ? -1 : 1;
      });
      setItemsArr(newItemsArr);

      setOpen(!open);
    }
  };

  return (
    <>
      {itemsArr.map((itemName) => {
        let className = 'items-dropdown__item';
        if (itemName === item) {
          className = className + ' items-dropdown__selected-item';
        } else if (!open) {
          className = className + ' items-dropdown__hidden-items';
        }
        return (
          <div className={className} key={itemName} data-item={itemName} onClick={handleClick}>
            <ItemIcon itemName={itemName} />
          </div>
        );
      })}
    </>
  );
}
