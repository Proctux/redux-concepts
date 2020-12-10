import { IProduct } from './types';

export const addProductToCartRequest = (product: IProduct) => {
  return {
    type: 'ADD_PRODUCT_TO_CART_REQUEST',
    payload: {
      product
    }
  }
}

export const addProductToCartSuccess = (productId: number) => {
  return {
    type: 'AAD_PRODUCT_TO_CART_SUCCESS',
    payload: {
      productId
    }
  }
}

export const addProductToCartFailure = (product: IProduct) => {
  return {
    type: 'ADD_PRODUCT_TO_CART_FAILURE',
    payload: {
      product
    }
  }
}