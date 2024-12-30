import { View, Text,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import { FIRESTORE_DB } from '../firebaseConfig'
import Question from '../components/Question'

const Feed = () => {

    const [questions, setQuestions] = useState([])
    
    useEffect(() => {
        const questionRef = collection(FIRESTORE_DB, 'questions')

        const sub = onSnapshot(questionRef, {
            next : (snapshot) => {
                console.log("fetched")

                const questions = []
                snapshot.docs.forEach((doc) => {
                    
                    questions.push(
                        {
                            id : doc.id,
                            ...doc.data(),
                        }
                    )
                })
                setQuestions(questions) 
                console.log(questions)
            }
        })

        return () => sub()

    },[])


  return ( 
    <ScrollView>
    <View style = {{backgroundColor : 'white'}}>
        {/* <Text>Questions</Text> */}
      {
        questions.map((question) => {
            
           return <Question key = {question.id} question={question} />
        //    return <Text key = {question.id}>{question.question}</Text>
        })
      }
    </View></ScrollView>  
  )
}

export default Feed