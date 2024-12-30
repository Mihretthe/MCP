import {View, Text, ScrollView,ImageBackground, TextInput,Image, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import { useState, useEffect } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { addDoc, collection } from 'firebase/firestore';
import { FIRESTORE_DB,FIREBASE_AUTH } from '../firebaseConfig';
import {  onAuthStateChanged } from 'firebase/auth';


    
const AddQuestion = () => {
    const numbers = (num) => {
        return Array.from({length: num}, (_, index) => index)
    }
    const [user, setUser] = useState(null);
    const [question, setQuestion] = useState("")
    const [num, setNum] = useState("")
    const [isSet, setTrue] = useState(false)
    const [answer, setAnswer] = useState(-1)
    const [choices, setChoices] = useState([])
    const [choice, setChoice] = useState('')

    
      
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

    

   
    
    const append = () => {
        if (choice.trim() !== ""){
            setChoices((prevList) => [...prevList, choice])
            setChoice("")
        }
    }

    const handleAddQuestion = () => {
        console.log(answer,num, answer >= 1 && answer <=num)
        {answer >= 1 && answer <= num ? (Alert.alert("Question Added Successfully"),
        addQ(),
        setQuestion(""),
         setAnswer(-1),
          setNum(""),
          setTrue(false),
          setChoices([]))
          :Alert.alert("Invalid Choice")
        
        }
    }

    // useEffect (() => {}, [])
    
    // To add the data to the firebase store
    const addQ = async () => {

        const doc = addDoc(collection(FIRESTORE_DB, 'questions'),{
            question : question, choices : choices, answer : answer, questionBy : userName,
        })
    }

    return <ScrollView style = {{backgroundColor : "white"}}>

        <View style = {{
            flex : 1,
            // padding : 10,
            // margin : 30,
            padding : 20,
            backgroundColor : "white",
            
        }}>
            {/* <ImageBackground
                source={require('../assets/back.png')}
                style={{
                    // flex: 1,
                    resizeMode: 'cover',
                    justifyContent: 'center',}}
         > */}
        <Text style = {styles.text}>Enter the question </Text>
        <TextInput 
            style = {styles.textInput} 
            placeholder='Question'
            onChangeText={(text) => {setQuestion(text)}}
            value={question}
        />
        <Text style = {styles.text}>How many choices?</Text>
        <TextInput 
            placeholder = "How Many" 
            style = {styles.textInput}
            keyboardType='numeric' 
            onChangeText={(number) => {number == "" ? setTrue(false) : setNum(number)}}
            
            
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
            alignSelf: "center",
          }}
            onPress = {() => {question != "" && Number(num) > 1 ? setTrue(true):setTrue(false)}}
        >
            <Text>Yes</Text>
        </TouchableOpacity>
        {isSet ? 
        <View style = {styles.choices}>
            <Text style = {styles.text}>Enter the Choices</Text>
            {
                
                numbers(Number(num)).map((index) => (
                        <TextInput 
                             key = {index}
                            style = {styles.textInput} 
                            placeholder={`Choice ${index + 1}`} 
                            onChangeText={(text) => setChoice(text)}
                            onBlur={append}
                        />
                )
                
                )}

            <Text style = {styles.text}>Answer</Text>
            <TextInput 
            placeholder = "Answer" 
            style = {styles.textInput}
            keyboardType='numeric' 
            onChangeText={(number) => {setAnswer(Number(number))}}
        />
        <TouchableOpacity 
            style = {[styles.textInput, {width : 150, display : 'flex', alignItems : 'center'}]}
            onPress={() =>  handleAddQuestion()}
        >
            <Text style = {[styles.textInput, {marginVertical : 1, padding : 2}]}>Add Question</Text>
        </TouchableOpacity>
        </View>:<View style = {styles.alert}>
            <Text style = {styles.alert }>Enter the Information</Text>
            <FontAwesome name="hand-o-up" size={24} color="white" />
            </View>
            }
        {/* </ImageBackground> */}
    </View>
    
    </ScrollView>
}

export default AddQuestion

const styles = StyleSheet.create({
    text : {
        fontSize : 24,
        // backgroundColor : '#E1F0DA'
        // color : 'white'

    },
    textInput : {
        fontSize: 18,
    backgroundColor: "#DCF2F2",
    padding: 10,
    margin: 10,
    borderRadius: 10,

    },
    choices : {
        paddingVertical : 10,
    },
    alert : {
        fontSize : 24,
        display : 'flex',
        flexDirection : 'row',
        // justifyContent : 'space-',
        margin : 20,
        // color : 'white'
    }
})