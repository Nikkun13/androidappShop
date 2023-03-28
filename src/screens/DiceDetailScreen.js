import { Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from "../../styles";
import Button from "../components/Button";
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../store/actions/cart.action';

const DiceDetailScreen = ({ navigation }) => {

  dispatch = useDispatch();
  const dice = useSelector(state => state.dices.selected)

  useEffect(() => {
    navigation.setOptions({
      title: dice.name
    })
  },[])

  const handlerAddItemCart = () => {
    console.log("Agregado",dice);
    dispatch(addItem({...dice, quantity:1}))};

  return (
    <View style={styles.screenDDS}>
      <Text style={styles.titleDDS}>{dice.name}</Text>
      <Text>Price: ${dice.price}</Text>
      <Text>{dice.weight}</Text>
      <Text>{dice.description}</Text>
      <Button
          styleButtonType={styles.buttonLanzar}
          title="Agregar al carrito"
          onPress={() => {handlerAddItemCart()}}
          disabled={false}
        />
    </View>
  )
}

export default DiceDetailScreen
