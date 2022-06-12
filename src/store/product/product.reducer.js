import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
} from "./product.types";

const initalState = {
  products: {
    loading: false,
    error: false,
  },
  data: [],
};
export const productReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_LOADING: {
      return {
        ...state,
        products: {
          ...state.products,
          loading: true,
          error: false,
        },
      };
    }
    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: {
          ...state.products,
          loading: false,
          error: false,
        },
        data: payload,
      };
    }
    case GET_PRODUCTS_ERROR: {
      return {
        ...state,
        products: {
          ...state.products,
          loading: false,
          error: true,
        },
      };
    }
    default: {
      return state;
    }
  }
};
