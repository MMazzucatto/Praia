import * as React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

export default function App(){
  return(
    <View style={estilo.container}>
    <Text style={estilo.titulo}>Praias lindas do Brasil</Text>
    <Text style= {estilo.frase}>Minhas Férias...</Text>
    <ScrollView style={estilo.fotos}>
    <Image style={estilo.img} source={require("./assets/rio-g978fe0d6c_1920.jpg")}/> 
    <Text style= {estilo.legenda}> Praia de Ipanema </Text>
    <Image style={estilo.img} source={require("./assets/beach-g11d4b3306_1280.jpg")}/>
     <Text style= {estilo.legenda}> Praia do Guaruja </Text>
      <Image style={estilo.img} source={require("./assets/beach-g98794ce78_1920.jpg")}/> 
    <Text style= {estilo.legenda}> Fernando de noronha </Text>
    <Image style={estilo.img} source={require("./assets/campeche-g9f84f36c9_1920.jpg")}/>
     <Text style= {estilo.legenda}> Praia Grande </Text>
      </ScrollView>
    </View>
  );
}

const estilo = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#DAA520'
  },

  titulo:{
    textAlign:'center',
    fontSize:30,
    marginTop:45,
    marginBottom:20
    
  },
  frase:{
    frontSize:15,
    marginBottom:20,
    textAlign:'center'

  },
  img:{
    width:350,
    height:250,
    borderRadius:10

  },
  legenda:{
    marginBottom:5,
    marginTop:5,
    textAlign:'center'

  },
  fotos:{
    alignItems:'center'
  },

});