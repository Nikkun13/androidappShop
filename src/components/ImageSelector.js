import React, { useState } from "react";
import { View, Button, Image, Text, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { styles } from "../../styles";

const ImageSelector = ({ onImage }) => {
  const [pickedUri, setPickedUri] = useState();

  const VerifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permisos insuficientes",
        "Necesita dar permisos de la cámara para usar la aplicación",
        [{ text: "Ok" }]
      );

      return false;
    }

    return true;
  };

  const handlerTakeImage = async () => {
    const isCameraOk = await VerifyPermissions();
    console.log("CAMARA_UNO"); //SI SE USA ANDROID 13, LLEGA HASTA ACÁ. PARA EVITAR ESTE ERROR USAR ANDROID 12 O INFERIOR
    if (!isCameraOk) return;
    //ACA ABAJO ESTA EL ERROR. NO SE ABRE LA CAMARA (EL ERROR DE PERMISOS SE DA CON ANDROID 13 TIRAMISU, USANDO S 12 POR EJEMPLO FUNCIONA)
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.8,
    });
    console.log("CAMARA_DOS"); //ESTE NO LLEGA A APARECER
    setPickedUri(image.assets[0].uri);
    onImage(image.assets[0].uri);
  };

  return (
    <View style={styles.containerIS}>
      <View style={styles.previewIS}>
        {!pickedUri ? (
          <Text>No hay imagen seleccionada...</Text>
        ) : (
          <Image style={styles.imageIS} source={{ uri: pickedUri }} />
        )}
      </View>
      <Button title="Tomar foto" color="#87CEFA" onPress={handlerTakeImage} />
    </View>
  );
};

export default ImageSelector;
