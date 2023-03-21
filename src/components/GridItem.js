import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from "../../styles";

const GridItem = ({
    item,
    onSelect
}) => {

  return (
    <View style={styles.gridItem}>
        <TouchableOpacity onPress={() => onSelect(item)} style={[styles.containerGI, { backgroundColor: item.color}]}>
            <View>
            <Text style={styles.titleGI}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default GridItem
