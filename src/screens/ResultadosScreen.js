import { FlatList, Text, View } from "react-native";

import Button from "../components/Button";
import React from "react";
import { styles } from "../../styles";

const ResultadosScreen = ({ route, navigation }) => {
  const dadosBolsa = route.params.dados;

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
      <View style={styles.fondo}>
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
};

export default ResultadosScreen;
