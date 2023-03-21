import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from "../../styles";

const DiceItem = ({ item, onSelected }) => {

    return (
        <TouchableOpacity onPress={() => onSelected(item)}>
            <View style={styles.diceItem}>
                <View>
                    <Text style={styles.titleD}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.details} > $ {item.price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default DiceItem