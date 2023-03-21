import { Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from "../../styles";
import Button from "../components/Button";

const DiceDetailScreen = ({ route, navigation}) => {

  const { dice } = route.params


  useEffect(() => {
    navigation.setOptions({
      title: dice.name
    })
  },[])

  return (
    <View style={styles.screenDDS}>
      <Text style={styles.titleDDS}>{dice.name}</Text>
      <Text>Price: ${dice.price}</Text>
      <Text>{dice.weight}</Text>
      <Text>{dice.description}</Text>
      <Button
          styleButtonType={styles.buttonLanzar}
          title="Comprar"
          disabled={false}
        />
    </View>
  )
}

export default DiceDetailScreen
