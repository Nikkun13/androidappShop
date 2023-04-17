import {
  FlatList,
  Modal as RNmodal,
  Text,
  View,
  Pressable,
} from "react-native";
import Button from "./Button";
import React from "react";
import { styles } from "../../styles";

const ModalSQL = ({
  navigation,
  modalVisibleSQL,
  cancelModalSQL,
  dbResult,
  lengthResult,
}) => {
  let dataGT = [];
  let i = 0;

  //Creo lo siguiente es inncesario, pero lo probe para ver si se arreglaba el
  //espacio en blanco dentro del modal. NO se arreglo con esto, pero aun asi lo deje
  while (lengthResult > i) {
    dataGT[i] = dbResult[i];
    i = i + 1;
  }

  cargarTirada = (dadosTirada) => {
    const dices = JSON.parse(dadosTirada.dados);
    navigation.navigate("Result", { dados: dices, tiradaGuardada: true });
  };

  return (
    <RNmodal animationType="slide" transparent={true} visible={modalVisibleSQL}>
      <View style={styles.modalMainView}>
        <View style={styles.modalView}>
          <View styles={styles.modalTitle}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Cargar una tirada
            </Text>
          </View>
          <View styles={styles.modalContent}>
            <Text style={styles.textoTres}>Seleccione:</Text>
          </View>
          <View styles={styles.modalActions}>
            {lengthResult === 0 ? (
              <Text>No hay datos cargados</Text>
            ) : (
              <FlatList
                style={styles.flatlistSQL}
                data={dataGT}
                renderItem={(data) => (
                  <Pressable
                    style={styles.pressableSQL}
                    onPress={() => {
                      cargarTirada(data.item);
                    }}
                  >
                    <Text style={styles.textSQL}>► {data.item.title} ◄</Text>
                  </Pressable>
                )}
                keyExtractor={(item) => item.id.toString()}
              />
            )}
            <Button
              styleButtonType={styles.buttonCancelar}
              onPress={() => {
                cancelModalSQL();
              }}
              title="Cancelar"
              disabled={false}
            />
          </View>
        </View>
      </View>
    </RNmodal>
  );
};

export default ModalSQL;
