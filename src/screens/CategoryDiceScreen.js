import { FlatList } from 'react-native'
import React from 'react'
import { DICES } from '../data/dices'
import DiceItem from '../components/DiceItem'

const CategoryDiceScreen = ({ route, navigation }) => {

  const { categoryId } = route.params

  const dices = DICES.filter(dice => dice.category === categoryId)

  const handleOnSelected = (item) => {
    navigation.navigate('Detail', {
      dice: item
    })
  }

  const renderDiceItem = ({ item }) => (<DiceItem item={item} onSelected={handleOnSelected} />)

  return (
    <FlatList 
      data={dices}
      keyExtractor={(item) => item.id}
      renderItem={renderDiceItem}
    />
  )
}

export default CategoryDiceScreen
