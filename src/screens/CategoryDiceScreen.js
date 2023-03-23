import { FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filteredDice, selectDice } from '../store/actions/dice.action'
import DiceItem from '../components/DiceItem'

const CategoryDiceScreen = ({ navigation }) => {

  const dispacth = useDispatch()
  const categoryDices = useSelector(state => state.dices.filteredDice)
  const category = useSelector(state => state.categories.selected)

  useEffect (() => {
    dispacth(filteredDice(category.id))
  },[])

  const handleOnSelected = (item) => {
    dispacth(selectDice(item.id))
    navigation.navigate('Detail', {
      dice: item
    })
  }

  const renderDiceItem = ({ item }) => (<DiceItem item={item} onSelected={handleOnSelected} />)

  return (
    <FlatList 
      data={categoryDices}
      keyExtractor={(item) => item.id}
      renderItem={renderDiceItem}
    />
  )
}

export default CategoryDiceScreen
