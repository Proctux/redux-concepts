import React from 'react';
import { useSelector } from 'react-redux';

const Cart: React.FC = () => {
  const state = useSelector(state => state);

  console.log(state);

  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
  )
};

export default Cart;