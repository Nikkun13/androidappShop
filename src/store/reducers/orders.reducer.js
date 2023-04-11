import { DELETE_ORDERS, GET_ORDERS } from "../actions/orders.action";

const INITIAL_STATE = {
  list: [],
};

const OrdersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        list: action.orders,
      };
    case DELETE_ORDERS:
      return {
        ...state,
        list: state.list.filter((order) => order.id !== action.id),
      };
    default:
      return state;
  }
};

export default OrdersReducer;
