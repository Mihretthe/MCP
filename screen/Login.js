import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebaseConfig";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const nav = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        console.log("User logged in:", user);
        nav.navigate(" ");

        // You can perform additional actions here or navigate to another screen
      })
      .catch((error) => {
        // // Error occurred during login
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log('Error logging in:', errorCode, errorMessage);
        // // Handle the error or display an error message to the user
        Alert.alert("Invalid login");
      });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        {/* <Image
        source={require('../assets/ready.png')}
        style={styles.picture}
      /> */}

        <TextInput
          style={styles.textIn}
          placeholder="Email"
          onChangeText={(text) => handleEmail(text)}
        />
        <TextInput
          style={styles.textIn}
          placeholder="Password"
          onChangeText={(text) => handlePassword(text)}
        />
        <TouchableOpacity
          style={{
            margin: 10,
            padding: 10,
            width: 150,
            display: "flex",
            alignItems: "center",
            borderRadius: 2,
            backgroundColor: "#DCF2F2",
            shadowColor: "gray",
            shadowRadius: 10,
            borderRadius: 10,
            alignSelf: "center"
          }}
          onPress={() => handleSubmit()}
        >
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    display: "flex",
  },
  text: {
    fontSize: 18,
    color: "black",
  },
  textIn: {
    fontSize: 18,
    backgroundColor: "#DCF2F2",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});
