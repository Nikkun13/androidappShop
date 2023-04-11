import { URL_API } from "../../constants/database";

export const GET_ORDERS = "GET_ORDERS";
export const DELETE_ORDERS = "DELETE_ORDERS";

export const getOrders = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/ordenes.json`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      const resData = await response.json();

      const orders = Object.keys(resData).map((key) => {
        return {
          id: key,
          ...resData[key],
        };
      });

      dispatch({
        type: GET_ORDERS,
        orders,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteOrder = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/ordenes/${id}.json`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const resData = await response.json();
      console.log(resData);
      dispatch({
        type: DELETE_ORDERS,
        id,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
