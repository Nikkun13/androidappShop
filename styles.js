import { Dimensions, StyleSheet } from "react-native";

import { Colors }  from "./src/constants/colors";

const tamanioUno = (40 * Dimensions.get("window").width) / 392;
const tamanioDos = (24 * Dimensions.get("window").width) / 392;
const tamanioTres = (16 * Dimensions.get("window").width) / 392;
const tamanioCuatro = (14 * Dimensions.get("window").width) / 392;
const tamanioCinco = (20 * Dimensions.get("window").width) / 392;

export const styles = StyleSheet.create({
  //Estilos referentes a cada Screen
  menu: {
    flex: 1,
    backgroundColor: Colors.fondoMenu,
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
  screenDDS:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
    width: Dimensions.get("window").width*0.8,
    marginVertical: 20,
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
  titleD: {
    fontSize: tamanioCinco,
    fontFamily: 'open-sans-bold',
},
details: {
    fontSize: tamanioCuatro,
},
titleDDS:{
  fontSize: tamanioCinco,
  fontFamily: 'open-sans',
},
titleGI: {
  fontFamily: 'open-sans-bold',
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

  //DiceItem
  
  diceItem: {
    padding: 20,
    margin: 10,
    borderRadius: 3,
    backgroundColor: '#ccc'
},


//GridItem
gridItem: {
  flex: 1,
  borderRadius: 6,
  margin: 15,
  height: 150,
},
containerGI: {
  flex: 1,
  borderRadius: 6,
  shadowColor: 'black',
  shadowOpacity: 0.26,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 6,
  elevation: 3,
  padding: 8,
  justifyContent: 'flex-end',
  alignItems: 'flex-end'
},


//TabsNavigator
tabBar: {
  shadowColor: '#7F5DF0',
  shadowOffset: {
    width: 0,
    height: 10
  },
  shadowOpacity: 0.25,
  shadowRadius: 0.25,
  elevation: 5,
  position: 'absolute',
  bottom: 25,
  left: 20,
  right: 20,
  borderRadius: 15,
  height: 90
},
tabBarIcon: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
},

//CARTSCREEN

containerCS:{
  flex:1,
  padding:12,
  backgroundColor: '#fff',
  paddingBottom:120,
},
list: {
  flex:1, 
},
footer: {
  padding:12,
  borderTopColor: "#ccc",
  borderTopWidth:1,
},
confirmCS:{
  backgroundColor:"#F5F5F5",
  borderRadius:10,
  padding:10,
  flexDirection: 'row',
  alignItems:'center',
  justifyContent: 'space-between',
},
total:{
  flexDirection: 'row',
},
textCS:{
  fontSize:18,
  fontFamily: "open-sans-bold",
  padding:8,
},

//CartItem

itemCart:{
  flex:1,
  padding:8,
  borderBottomWidth:1,
  borderBottomColor: '#ccc'
},
headerCart:{
  fontSize:18,
  fontFamily:  "open-sans-bold",
},
detailCart:{
  flex:1,
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between'
},
textCart: {
  fontSize:16,
  fontFamily:'OpenSans_400Regular'
},

//ImagenSelector

containerIS:{
  marginBottom: 10,
},
previewIS: {
  width: 200,
  height: 200,
  marginBottom: 10,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#777',
  borderWidth: 1,
},
imageIS: {
  width: '100%',
  height: '100%',
},

//Inputs

formControlInputs: {
  width: '100%'
},
labelInputs: {
  fontFamily:  "open-sans-bold",
  marginVertical: 8
},
inputInputs: {
  paddingHorizontal: 2,
  paddingVertical: 5,
  borderBottomColor: '#ccc',
  borderBottomWidth: 1
},
errorContainerInputs: {
  marginVertical: 5
},
errorTextInputs: {
  fontFamily:  "open-sans-bold",
  color: 'red',
},

//Order Item

orderOI: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 10,
  margin: 10,
  borderColor: "#ccc",
  borderWidth: 1,
  borderRadius: 6,
},
dateOI: {
  fontSize: 18,
},
totalOI: {
  fontSize: 18,
  fontFamily: "open-sans-bold"
},

//Register y Login

screenRyL: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
},
titleRyL: {
  fontSize: 24,
  fontFamily: "open-sans-bold",
  marginBottom: 12,
  textAlign: "center",
},
containerRyL: {
  width: "80%",
  maxWidth: 400,
  padding: 12,
  margin: 12,
  borderColor: "#ccc",
  borderWidth: 1,
  borderRadius: 10,
  backgroundColor: "#fff",
},
formRyL: {
  width: "100%",
  justifyContent: "center",
  alignItems: "flex-start",
},
labelRyL: {
  fontSize: 16,
  fontFamily: "open-sans-bold"
},
textInputRyL: {
  width: "100%",
  height: 40,
  borderBottomColor: "#ccc",
  borderBottomWidth: 1,
  marginBottom: 12,
},
ButtonRyL: {
  width: "100%",
  justifyContent: "center",
  height: 40,
  backgroundColor: Colors.primary,
  marginVertical: 12,
},
ButtonTextRyL: {
  fontSize: 18,
  fontFamily: "open-sans-bold",
  textAlign: "center",
  color: "#fff",
},
promptRyL: {
  alignItems: "center",
},
promptMessageRyL: {
  fontSize: 16,
  fontFamily: "open-sans",
  color: "#333",
},
promptButtonRyL: {
  fontSize: 16,
  fontFamily: "open-sans-bold",
  color: Colors.primary,
},
buttonRyL: {
  backgroundColor: Colors.primary,
  marginVertical: 20,
},

flatlistSQL:{
  maxHeight:200,
},
pressableSQL: {
  alignItems: 'center',
  paddingVertical: 10,
},
textSQL: {
  fontFamily: "open-sans-bold",
}
});
