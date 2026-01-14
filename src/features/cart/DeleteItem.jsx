import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => () => {
    dispatch(deleteItem(id));
  };

  return (
    <Button type="small" onClick={handleDelete(pizzaId)}>
      Delete
    </Button>
  );
};

export default DeleteItem;
