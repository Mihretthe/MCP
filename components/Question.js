import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native'
import { useState } from 'react'
import { RadioButton } from 'react-native-paper'


const Question = ({question}) => {

    const [checked, setChecked] = useState('')
    const [disable, setDisable] = useState(false)
    const [isCorrect, setCorrect] = useState(false)
    const [isInCorrect, setInCorrect] = useState(false)
    const handleChange = (value) => {
        setChecked(value)

    }
  //   const addQ = async () => {

  //     const doc = addDoc(collection(FIRESTORE_DB, 'answered'),{
  //         question : question.question, choices : question.choices, answer : question.answer, questionBy : Name,
  //     })
  // }

    
    return <View style = {[styles.container, {borderWidth : isCorrect ? 2 : isInCorrect ? 2 : 0,  borderColor : isCorrect ? 'lightgreen' : isInCorrect ? 'red' : 'none'}]}>
        <Text 
          style = {styles.question}>{question.question}</Text>
        <RadioButton.Group onValueChange={handleChange} value = {checked} >
        {question.choices.map((choice, index) => (
            <RadioButton.Item  
                key = {index}
                style = {styles.choice} 
                label = {choice} 
                labelStyle = {{color : 'white'}}
                value = {index} 
                status={checked === index ? 'checked' : 'unchecked'}
                disabled = {disable}
            />
        ))}
        </RadioButton.Group>
        <Text>Question By: {question.questionBy}</Text>
        <TouchableOpacity 
            style = {styles.button}
            onPress = {() => {
              setDisable(true);
                if (Number(question.answer) === (parseInt(checked) + 1)){
                    // Alert.alert("Correct")
                    setCorrect(true)
                }else{
                  console.log(question.answer)
                    setInCorrect(true)
                    // Alert.alert("Incorrect")
                }
            }}
        >
            <Text style = {{color : 'white'}}>Confirm</Text>
        </TouchableOpacity>
        
        
    </View>
}

export default Question

const styles = StyleSheet.create({
    container : { 
      paddingVertical : 10, 
      margin: 20
      
    }
    ,
    question :{ 
      fontSize : 24,
    },
    choice : {
      color : 'black',
      backgroundColor : '#2D3250',
      padding : 10,
      margin : 2,
      borderRadius : 2
    },
    button : {
        backgroundColor : '#2D3250',
        padding : 10,
        margin : 2,
        width : 80,
        alignItems : 'center', 
        borderRadius : 3
    }
})

const darkStyle = StyleSheet.create({

})