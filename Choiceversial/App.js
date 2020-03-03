import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import logo from './assets/logo.png';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

export default function App() {
  let [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async() => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false){
      alert("Permission to access camera roll is required");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    
    if(pickerResult.cancelled === true){
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri});
  };

  let openShareDialogAsync = async() => {
    if(!(await Sharing.isAvailableAsync())){
      alert('Uh oh, sharing isnt available on your platform');
      return;
    }
    Sharing.shareAsync(selectedImage.localUri);
  }

  if(selectedImage !== null){
    return(
      <View style={styles.container}>
        <Image source={{uri: selectedImage.localUri}}
        style={styles.thumbnail}
        />

        <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
          <Text style={styles.buttonText}>Share this photo</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image}/>
      <Text style={styles.text}>To share a photo from your phone to your friend, just press the button below!</Text>
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#888',
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 15,
  },
  image:{
    width:305,
    height:159,
    marginBottom: 10,
  },
  button:{
    backgroundColor: 'blue',
    marginTop: 10,
    padding:20,
    borderRadius: 5,
  },
  buttonText:{
    fontSize: 20,
    color: '#fff', 
  },
  thumbnail:{
    width: 300,
    height: 300,
    resizeMode: "contain",
  }
});
