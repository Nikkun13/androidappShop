import { FlatList, Image, View } from 'react-native'
import React from 'react'
import GridItem from '../components/GridItem'
import { CATEGORIES } from '../data/categories'
import { styles } from "../../styles";

const CategoriesScreen = ({ navigation }) => {

    const onSelectGridItem = (item) => {
        navigation.navigate('Products', {
            categoryId: item.id,
            categoryName: item.title
        })
    }

    const renderGridItem = ({ item }) => <GridItem item={item} onSelect={onSelectGridItem} />


    return (
        <View>
            <Image style={styles.imagen} source={require('../../img/logo.png')} />
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderGridItem}
            numColumns={2}
        />
        </View>
    )
}

export default CategoriesScreen
