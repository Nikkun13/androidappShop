import { Modal as RNmodal, Text, View } from "react-native";

import Button from "./Button";
import React from "react";
import { styles } from "../../styles";

const Modal = ({
  dices,
  modalVisible,
  selectedDice,
  addThreeDices,
  removeDice,
  cancelModal,
  desactivadoOpcionTresDados,
}) => {
  return (
    <RNmodal animationType="slide" transparent={true} visible={modalVisible}>
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
              Dado de {selectedDice?.value} caras
            </Text>
          </View>
          <View styles={styles.modalContent}>
            <Text style={styles.textoTres}>¿Qué desea hacer?</Text>
          </View>
          <View styles={styles.modalActions}>
            <Button
              styleButtonType={styles.buttonAgregar}
              onPress={() => {
                addThreeDices(selectedDice.id, dices);
              }}
              title="Agregar 3 Dados"
              disabled={desactivadoOpcionTresDados}
            />
            <Button
              styleButtonType={styles.buttonEliminar}
              onPress={() => {
                removeDice(selectedDice.id);
              }}
              title="Eliminar"
              disabled={false}
            />
            <Button
              styleButtonType={styles.buttonCancelar}
              onPress={() => {
                cancelModal();
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

export default Modal;
