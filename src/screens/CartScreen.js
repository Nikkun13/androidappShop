import { Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../components/CartItem';
import { styles } from "../../styles";

const CartScreen = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);

  const onHandleConfirmCart = ()=>console.log("Confirma carrito");
  const handlerDeleteItem = (itemID) => dispatch(removeItem(itemID));

  const renderItem = (data) => {
    <CartItem item={data.item} onDelete={handlerDeleteItem} />
  };

  return (
    <View style={styles.containerCS}>
      <View style={styles.list}>
        <FlatList 
          data={items}     
          renderItem={renderItem} 
          keyExtractor={(item)=>item.id}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirmCS} onPress={onHandleConfirmCart}>
          <Text>Confirmar</Text>
          <View style={styles.total}>
            <Text style={styles.textCS}>Total: </Text>
            <Text style={styles.textCS}>${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartScreen
