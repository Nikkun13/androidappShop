import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../../styles";
import Button from "../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../store/actions/cart.action";
import ImageSelector from "../components/ImageSelector";

const DiceDetailScreen = ({ navigation }) => {
  dispatch = useDispatch();
  const dice = useSelector((state) => state.dices.selected);
  const [imageValue, setImageValue] = useState("");

  useEffect(() => {
    navigation.setOptions({
      title: dice.name,
    });
  }, []);

  const handlerAddItemCart = () => {
    if (dice.categoryName !== "Remeras") {
      dispatch(addItem({ ...dice, quantity: 1 }));
    } else {
      //Mando la imagen y una id diferente para cada producto, ya que iguales remeras tendran diferentes imagenes
      dispatch(
        addItem({ ...dice, quantity: 1, img: imageValue, id: Date.now() })
      );
    }
  };

  return (
    <View style={styles.screenDDS}>
      <Text style={styles.titleDDS}>{dice.name}</Text>
      <Text>Price: ${dice.price}</Text>
      <Text>{dice.weight}</Text>
      <Text>{dice.description}</Text>
      {dice.categoryName === "Remeras" ? (
        <>
          <ImageSelector onImage={(image) => setImageValue(image)} />
          <Text>Debe cargar una imagen para habilitar el boton de compra</Text>
          <Button
            styleButtonType={styles.buttonLanzar}
            title="Agregar al carrito"
            onPress={() => {
              handlerAddItemCart();
            }}
            disabled={imageValue === "" ? true : false}
          />
        </>
      ) : (
        <Button
          styleButtonType={styles.buttonLanzar}
          title="Agregar al carrito"
          onPress={() => {
            handlerAddItemCart();
          }}
          disabled={false}
        />
      )}
    </View>
  );
};

export default DiceDetailScreen;
