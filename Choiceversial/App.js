import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, ImageBackground } from 'react-native';
import logo from './assets/logo.png';
import background from './assets/backgroundchoiceversial.png';



var options = ["Donald Trump is racist", "North Korea is a great country to live in", "Apple is better than Microsoft", "Is water wet?", "Is a hot dog a sandwich?", "Is cereal a soup?"];


function generateQuestion(){
  randindex = Math.floor(Math.random()*options.length);
  randoption = options[randindex];
  options.splice(randindex, 1);
  console.log(randoption + " is removed");
  return(randoption);
}


export default function App() {
  const [option, setOption] = useState("Press a button to start");

  console.log(option);
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background}>
        <Image style={styles.logo} source={logo}/>
        <Text style={styles.textstyle}>{option}</Text>
        <View style={styles.optionstyle}>
          <TouchableOpacity onPress={() => setOption(generateQuestion())} style={{flex: 1, backgroundColor: "black"}}><Text>Yes</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setOption(generateQuestion())} style={{flex: 1, backgroundColor: "black"}}><Text>No</Text></TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  textstyle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  optionstyle: {
    flex:1,
    flexDirection: "row",
    justifyContent: "center"
  }, 
  background: {
    flex: 1,
    flexDirection: "column",
    resizeMode: "cover",
  },
  logo : {
    justifyContent: "flex-start",
    width: "100%",
    height: "5%",
    marginTop: 50,
  }
})