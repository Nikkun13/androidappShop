import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../constants/colors";
import { styles } from "../../styles";

const formatDay = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};

const OrderItem = ({ item, onDelete }) => {
  return (
    <View style={styles.orderOI}>
      <View>
        <Text style={styles.dateOI}>{formatDay(item.date)}</Text>
        <Text style={styles.totalOI}>$ {item.total}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="md-trash" size={22} color={Colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderItem;
