import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { IProduct } from '../../store/modules/cart/types';
import { IState } from '../../store/index';
import { addProductToCartRequest } from '../../store/modules/cart/actions';

interface ProductProps {
  product: IProduct;
}

const CatalogItem: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id)
  })

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product))
  }, [dispatch, product])

  return (
    <article>
      <strong>{product.title}</strong>{" - "}
      <span>{product.price}</span>{"  "}

      <button type="button" onClick={handleAddProductToCart}> Comprar </button>

      {hasFailedStockCheck ? <span style={{ color: 'red'}}>Falta de Stock</span> : <></>}
    </article>
  )
};

export default CatalogItem;