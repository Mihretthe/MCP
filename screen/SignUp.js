import { View,Image, Text, TextInput, TouchableOpacity ,StyleSheet, Alert, ScrollView} from 'react-native';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {doc, setDoc } from 'firebase/firestore';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../firebaseConfig';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {

  const nav = useNavigation()
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [bio, setBio] = useState('');

  const handleEmail = (text) => {
    setEmail(text);
  };

  const handlePassword = (text) => {
    setPassword(text);
  };

  const handleConfirm = (text) => {
    setConfirm(text);
  };

  const handleBio = (text) => {
    setBio(text);
  };

  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailPattern.test(email)) {
      return true;
    }
    return false;
  };

  const validatePassword = () => {
    if (password === confirm) {
      return true;
    }
    return false;
  };

  const handleSubmit = () => {
    if (validateEmail() && validatePassword()) {
      createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
        .then((userCredential) => {
          // User creation successful
          const user = userCredential.user;

          nav.navigate(' ')
        //   
          // Save additional user information to Firestore
          const firestore = {FIRESTORE_DB};
          const userDocRef = doc(firestore, 'users', user.uid);
          const userData = {
            email: email,
            password : password,
            // bio: bio,
            // quizzesCompleted: 0, // Set the initial number of quizzes completed to 0
          };

          setDoc(userDocRef, userData)
            .then(() => {
            Alert.alert("Successfully Registered")
            })
            .catch((error) => {
              Alert.alert("Error Saving Data")
            });
        })
        .catch((error) => {
          Alert.alert("Error Creating a User")
        });
    }
  };

  return (
    <ScrollView style = {{backgroundColor : "#7077A1"}}>
    <View style = {styles.container}>
      <Image
        source={require('../assets/ready.png')}
        style={styles.picture}
      />
      <View>
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
        <TextInput
          style = {styles.textIn}
          placeholder='Confirm Password'
          onChangeText={(text) => handleConfirm(text)}
        />
        {/* <TextInput
          style = {styles.textIn}
          placeholder='Bio'
          onChangeText={(text) => handleBio(text)}
        /> */}
        <TouchableOpacity style = {{margin : 10, padding : 10,width : 150, display : 'flex', alignItems : 'center', borderRadius : 2, backgroundColor : '#DCF2F2'}} onPress={() => handleSubmit()}>
          <Text style = {styles.text}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

export default SignUp;

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