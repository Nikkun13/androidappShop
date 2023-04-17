import { FlatList, Text, View } from "react-native";
import Button from "../components/Button";
import React from "react";
import { styles } from "../../styles";
//AGREGADO INSERTTIRADA
import { insertTirada } from "../db";

const ResultadosScreen = ({ route, navigation }) => {
  const dadosBolsa = route.params.dados;
  const tiradaGuardada = route.params.tiradaGuardada;

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
  guardarTirada = async () => {
    const title = Date.now().toString();
    const tiradaJSON = JSON.stringify(dadosBolsa);
    console.log("Tirada en JSON", tiradaJSON);
    const dbResult = await insertTirada(title, tiradaJSON);
    console.log(dbResult);
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
          <Button
            styleButtonType={styles.buttonVaciar}
            onPress={() => {
              guardarTirada();
            }}
            title="Guardar Tirada"
            disabled={false}
          />
        )}
      </View>
    </View>
  );
};

export default ResultadosScreen;
