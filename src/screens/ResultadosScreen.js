import { FlatList, Text, View } from "react-native";
import Button from "../components/Button";
import React, { useState } from "react";
import { styles } from "../../styles";
import ModalGuardar from "../components/ModalGuardar";
//AGREGADO INSERTTIRADA

const ResultadosScreen = ({ route, navigation }) => {
  const dadosBolsa = route.params.dados;
  const tiradaGuardada = route.params.tiradaGuardada;
  const [modalVisibleGuardar, setModalVisibleGuardar] = useState(false);

  if (dadosBolsa == undefined) {
    return (
      <View style={styles.resultPage}>
        <Text style={styles.textoUno}>Sin dados</Text>
        <View>
          <Button
            styleButtonType={styles.buttonRegresar}
            onPress={() => {
              navigation.navigate("Simulator");
            }}
            title="Ir a la Bolsa de Dados"
            disabled={false}
          />
        </View>
      </View>
    );
  }

  //AGREGADO GUARDARTIRADA

  const cancelModalGuardar = () => {
    setModalVisibleGuardar(false);
  };

  return (
    <View style={styles.resultPage}>
      <View>
        <Text style={styles.textoUno}>Resultados:</Text>
      </View>
      <FlatList
        data={dadosBolsa}
        horizontal={false}
        numColumns={3}
        renderItem={(data) => (
          <View style={styles.resultados}>
            <View style={[styles.contentList, data.item.colorD]}>
              <Text style={styles.numeroDado}>{data.item.value}</Text>
            </View>
            <View>
              <Text style={styles.resultadosTexto}> = {data.item.result}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={[styles.inputContainer, styles.fondo]}>
        <Button
          styleButtonType={styles.buttonRegresar}
          onPress={() => {
            navigation.navigate("Simulator");
          }}
          title="Ir a la Bolsa de Dados"
          disabled={false}
        />
        {/* AGREGADO BOTON GUARDARTIRADA */}
        {tiradaGuardada ? null : (
          <>
            <ModalGuardar
              modalVisibleGuardar={modalVisibleGuardar}
              cancelModalGuardar={cancelModalGuardar}
              dadosBolsa={dadosBolsa}
            />
            <Button
              styleButtonType={styles.buttonVaciar}
              onPress={() => {
                setModalVisibleGuardar(true);
              }}
              title="Guardar Tirada"
              disabled={false}
            />
          </>
        )}
      </View>
    </View>
  );
};

export default ResultadosScreen;
