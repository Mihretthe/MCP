import { View, Text, TextInput, TouchableOpacity,StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../firebaseConfig';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

  const nav = useNavigation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (text) => {
    setEmail(text);
  };

  const handlePassword = (text) => {
    setPassword(text);
  };

  const handleSubmit = () => {
    signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
      .then((userCredential) => {
        // Login successful
        const user = userCredential.user;
        console.log('User logged in:', user);
        nav.navigate(' ')

        // You can perform additional actions here or navigate to another screen
      })
      .catch((error) => {
        // Error occurred during login
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error logging in:', errorCode, errorMessage);
        // Handle the error or display an error message to the user
      });
  };

  return (
    <View style = {styles.container}>
      
      <TextInput
          style = {styles.textIn}  
          placeholder='Email'
          onChangeText={(text) => handleEmail(text)}
        />
        <TextInput
          style = {styles.textIn}
          placeholder='Password'
          onChangeText={(text) => handlePassword(text)}
        />
        <TouchableOpacity style = {{margin : 10, padding : 10,width : 150, display : 'flex', alignItems : 'center', borderRadius : 2, backgroundColor : '#DCF2F2'}} onPress={() => handleSubmit()}>
          <Text style = {styles.text}>Register</Text>
        </TouchableOpacity>
      
    </View>
  );
};

export default Login;


const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#7077A1',
        display : 'flex',
        gap : 10
    },
    text : {
        fontSize : 18,
        color : '#7077A1'
    },
    textIn : {
        fontSize : 18, 
        backgroundColor : '#DCF2F2',
        padding : 10,
        margin: 10
    }
})