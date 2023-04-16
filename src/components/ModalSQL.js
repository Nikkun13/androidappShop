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

const ModalSQL = ({ modalVisibleSQL, cancelModalSQL, dbResult }) => {
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
            <FlatList
              data={dbResult}
              renderItem={(data) => (
                <Pressable
                  onPress={() => {
                    alert("Ha seleccionado esto");
                  }}
                >
                  <Text>{data.item.title}</Text>
                </Pressable>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
            {console.log("ey")}
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
