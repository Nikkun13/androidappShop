import { FlatList, Image, View } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import GridItem from "../components/GridItem";
import { selectCategory } from "../store/actions/category.action";
import { styles } from "../../styles";

const CategoriesScreen = ({ navigation }) => {
  const categories = useSelector((state) => state.categories.categories);
  const dispacth = useDispatch();

  const onSelectGridItem = (item) => {
    dispacth(selectCategory(item.id));
    navigation.navigate("Products", {
      categoryName: item.title,
    });
  };

  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelect={onSelectGridItem} />
  );

  return (
    <View style={styles.menu}>
      <View style={styles.centrar}>
        <Image style={styles.imagen} source={require("../../img/logo.png")} />
      </View>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;
