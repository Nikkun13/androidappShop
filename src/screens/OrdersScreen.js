import { View, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { styles } from "../../styles";
import { deleteOrder, getOrders } from "../store/actions/orders.action";
import OrderItem from "../components/OrderItem";

const OrderScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const onHandleDeleteOrder = (id) => {
    dispatch(deleteOrder(id));
  };
  const orders = useSelector((state) => state.orders.list);
  const renderOrderItem = ({ item }) => (
    <OrderItem item={item} onDelete={onHandleDeleteOrder} />
  );

  return (
    <View style={styles.containerCS}>
      <View style={styles.list}>
        <FlatList
          data={orders}
          renderItem={renderOrderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default OrderScreen;
