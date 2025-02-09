import { useEffect, useState } from 'react';
import { Cart } from '../models/cart.model';
import { deleteCart, fetchCart } from '../api/carts.api';

export const useCart = () => {
  const [carts, setCarts] = useState<Cart[]>([]);
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  const deleteCartItem = (id: number) => {
    deleteCart(id).then(() => {
      setCarts(carts.filter((cart) => cart.id !== id));
    });
  };

  useEffect(() => {
    fetchCart().then((data) => {
      setCarts(data);
    });
  }, []);

  useEffect(() => {
    setIsEmpty(carts.length === 0);
  }, [carts]);

  return { carts, isEmpty, deleteCartItem };
};
