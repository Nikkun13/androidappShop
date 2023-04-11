import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../constants/colors";
import { styles } from "../../styles";

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.itemCart}>
      <View>
        <Text style={styles.headerCart}>
          {item.categoryName} - {item.name}
        </Text>
      </View>
      <View style={styles.detailCart}>
        <View>
          <Text style={styles.itemCart}>Cantidad: {item.quantity}</Text>
          <Text>{item.price}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="trash" size={24} color={Colors.accent} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
