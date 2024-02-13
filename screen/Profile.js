import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native'
import React from 'react'

import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { collection,where, onSnapshot } from 'firebase/firestore'

import { useEffect, useState } from 'react';
import {  onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH, FIRESTORE_DB} from '../firebaseConfig';
import { useNavigation } from '@react-navigation/native';



const Profile = () => {


    const nav = useNavigation()

    const [user, setUser] = useState(null);

    
      
      // Usage:
    
    useEffect(() => {
      const auth = FIREBASE_AUTH;
  
      // Listen for changes in the authentication state
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in
          
          setUser(user);
          Name = userName
          console.log(Name, userName, user.uid)
       
      }});
  
      // Clean up the listener when the component unmounts
      return () => unsubscribe();
    }, []);
  
    if (!user) {
      // User is not logged in
      return <Text>Please log in to view your profile.</Text>;
    }
  
    // if (!userData) {
    //   // User data is still loading
    //   return <Text>Loading user data...</Text>;
    // }
  
    // User is logged in and data is available
    const [userName] = user.email.split('@')
    
  return (
    <View style = {styles.container}>
      <View style = {styles.profileContainer}> 
        <TouchableOpacity 
            style = {styles.picture} 
            onPress = {() => {

        }}>
            <FontAwesome5 name="user-alt" size={40} color="black" />
        </TouchableOpacity>
        <View> 
            <Text style = {styles.userName}>
                {userName}
            </Text>
        </View>
      </View>
    <View style = {styles.details}>
      {/* <Text style = {styles.detailText}>Contribution : 10</Text> */}
      {/* <Text style = {styles.detailText}> Done</Text> */}
      {/* <Text style = {styles.detailText}>Bio : Ethiopia, 23</Text>
      <Text style = {styles.detailText}>Acadamic Status : Student</Text> */}
      <Image source={require("../assets/loading.png")} />

      <TouchableOpacity 
        style = {{display : 'flex', flexDirection : 'row',gap : 10,backgroundColor : 'black',borderWidth : 1, padding : 10,width : 150, display : 'flex', alignItems : 'center', borderRadius : 20 }}
        onPress = {() => {
            nav.navigate('Sign Up')
        }}
        >
        
            <AntDesign name="logout" size={24} color="#7077A1" /><Text style = {[styles.detailText, {color : '#7077A1'}]}>Log Out</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container : {
        backgroundColor : "#7077A1",
        flex : 1    
        
    },

    profileContainer : {
        backgroundColor : '#424769',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-around',
        // borderColor : '#1F2544',
        // borderWidth : 1,
        
        // backgroundColor : 'green'
    },
    picture : {
        backgroundColor : "#fff",
        padding : 40,
        margin : 40,
        borderRadius : 80,
        borderWidth : 2,
        borderColor : 'gray',
    },

    userName : {
        color : 'white',
        fontSize: 30,
        fontWeight: '200',
        padding : 60,
        margin : 10,
    },
    details : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        gap : 30, 
        paddingVertical : 40,
        paddingHorizontal : 20,

    },

    detailText : {
        color : 'black',
        fontSize : 25,
    }
})