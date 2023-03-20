import { Dimensions, StyleSheet } from "react-native";

import { Colors }  from "./src/constants/colors";

const tamanioUno = (40 * Dimensions.get("window").width) / 392;
const tamanioDos = (24 * Dimensions.get("window").width) / 392;
const tamanioTres = (16 * Dimensions.get("window").width) / 392;
const tamanioCuatro = (14 * Dimensions.get("window").width) / 392;
const tamanioCinco = (20 * Dimensions.get("window").width) / 392;

export const styles = StyleSheet.create({
  //Estilos referentes a cada Screen
  container: {
    flex: 1,
    backgroundColor: Colors.fondoMenu,
    alignItems: "center",
    justifyContent: "center",
  },
  menu: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bolsa: {
    flex: 1,
    backgroundColor: Colors.fondoBolsa,
    alignItems: "center",
    justifyContent: "center",
  },
  resultPage: {
    flex: 1,
    backgroundColor: Colors.fondoResultado,
    alignItems: "center",
    justifyContent: "center",
  },

  //Estilos referentes al texto e imagenes
  textoUno: {
    color: Colors.titulo,
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: tamanioUno,
    textAlign: "center",
    fontFamily: "open-sans-bold",
  },
  textoDos: {
    color: Colors.black,
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: tamanioDos,
    textAlign: "center",
    fontFamily: "open-sans",
  },
  textoTres: {
    color: Colors.black,
    fontSize: tamanioTres,
    textAlign: "center",
    padding: 10,
    fontFamily: "open-sans",
  },
  centrar: {
    alignItems: "stretch",
    paddingRight: 40,
    paddingLeft: 40,
    paddingBottom: 10,
  },
  imagen: {
    height: Dimensions.get("window").height / 3,
    minHeight: 200,
    width: Dimensions.get("window").height / 3,
    maxWidth: "80%",
    minWidth: 200,
    borderRadius: 150,
  },
  inputContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  fondo : {
    paddingBottom: '30%',
  },
  input: {
    width: 150,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    fontSize: tamanioTres,
    textAlign: "center",
    margin: 5,
  },
  resultadosTexto: {
    fontFamily: "roboto-bold",
    fontSize: tamanioTres,
  },

  //Estilos referentes a los dados
  numeroDado: {
    color: Colors.black,
    fontSize: tamanioCuatro,
    textAlign: "center",
    fontFamily: "roboto-bold",
  },
  diceContainer: {
    marginTop: 30,
    flex: 1,
  },
  dice: {
    padding: 10,
    textAlign: "center",
  },
  contentList: {
    padding: 5,
    margin: 4,
    width: 35,
    height: 35,
    justifyContent: "center",
    borderRadius: 5,
  },
  colorCuatro: {
    backgroundColor: Colors.dadoCuatro,
  },
  colorDiez: {
    backgroundColor: Colors.dadoDiez,
  },
  colorOcho: {
    backgroundColor: Colors.dadoOcho,
  },
  colorDoce: {
    backgroundColor: Colors.dadoDoce,
  },
  colorSeis: {
    backgroundColor: Colors.dadoSeis,
  },
  colorVeinte: {
    backgroundColor: Colors.dadoVeinte,
  },
  resultados: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  //Estilos del Modal
  modalMainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    padding: 10,
    borderRadius: 5,
    fontSize: tamanioCinco,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalContent: {
    padding: 10,
    width: "50%",
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  //Estilos de los Botones
  button: {
    borderRadius: 20,
    padding: 10,
    margin: 10,
    width: Dimensions.get("window").width / 2.4,
    alignItems: "center",
  },
  buttonAgregar: {
    backgroundColor: Colors.botonAgregar,
  },
  buttonEliminar: {
    backgroundColor: Colors.botonEliminar,
  },
  buttonCancelar: {
    backgroundColor: Colors.botonCancelar,
  },
  buttonLanzar: {
    backgroundColor: Colors.botonLanzar,
  },
  buttonRegresar: {
    backgroundColor: Colors.botonBolsa,
  },
  buttonDesactivado: {
    backgroundColor: Colors.botonDesactivado,
  },
  buttonVaciar: {
    backgroundColor: Colors.botonVaciar,
  },
  buttonText: {
    fontSize: tamanioCuatro,
  },
});
