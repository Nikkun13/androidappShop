import { Modal as RNmodal, Text, View, TextInput } from "react-native";
import Button from "./Button";
import React, { useState } from "react";
import { insertTirada } from "../db";
import { styles } from "../../styles";

const ModalGuardar = ({
  modalVisibleGuardar,
  cancelModalGuardar,
  dadosBolsa,
}) => {
  const [nombreGuardado, setNombreGuardado] = useState("");

  const onChangeName = (name) => {
    setNombreGuardado(name);
  };

  guardarTirada = async () => {
    const title = nombreGuardado;
    const tiradaJSON = JSON.stringify(dadosBolsa);
    const dbResult = await insertTirada(title, tiradaJSON);
    cancelModalGuardar();
  };

  return (
    <RNmodal
      animationType="slide"
      transparent={true}
      visible={modalVisibleGuardar}
    >
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
              Guardar Tirada
            </Text>
          </View>
          <View styles={styles.modalContent}>
            <Text style={styles.textoTres}>Escriba un Nombre:</Text>
          </View>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={onChangeName}
              value={nombreGuardado}
            />
          </View>
          <View styles={styles.modalActions}>
            <Button
              styleButtonType={styles.buttonLanzar}
              onPress={() => {
                guardarTirada();
              }}
              title="Guardar"
              disabled={false}
            />
            <Button
              styleButtonType={styles.buttonCancelar}
              onPress={() => {
                cancelModalGuardar();
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

export default ModalGuardar;
