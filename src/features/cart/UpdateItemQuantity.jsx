import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQuantity, getCurrentQuantityById, increaseItemQuantity } from './cartSlice';

const UpdateItemQuantity = ({ pizzaId }) => {
  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  const handleIncreaseItemQuantity = () => dispatch(increaseItemQuantity(pizzaId));
  const handleDecreaseItemQuantity = () => dispatch(decreaseItemQuantity(pizzaId));

  return (
    <div className="flex items-center justify-between gap-3 md:gap-3">
      <Button type="round" onClick={handleDecreaseItemQuantity}>
        -
      </Button>
      <div className="text-sm font-medium">{currentQuantity}</div>
      <Button type="round" onClick={handleIncreaseItemQuantity}>
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
