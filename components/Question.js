import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import { doc, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; // Import Firebase Auth
import { FIRESTORE_DB } from '../firebaseConfig'; // Use your Firebase config

const Question = ({ question }) => {
  const [checked, setChecked] = useState('');
  const [disable, setDisable] = useState(false);
  const [isCorrect, setCorrect] = useState(false);
  const [isInCorrect, setInCorrect] = useState(false);

  const handleChange = (value) => {
    setChecked(value);
  };

  const incrementScore = async (userId, userName) => {
    const userScoreRef = doc(FIRESTORE_DB, 'scores', userId);

    try {
      const userDoc = await getDoc(userScoreRef);

      if (userDoc.exists()) {
        // If user exists, increment their score
        await updateDoc(userScoreRef, {
          score: increment(10), // Increment score by 1
        });
      } else {
        // If user does not exist, create a new document
        await setDoc(userScoreRef, {
          userId,
          userName,
          score: 10, // Initial score
        });
      }
    } catch (error) {
      console.error('Error updating score:', error);
    }
  };

  const handleConfirm = async () => {
    setDisable(true);
    const auth = getAuth(); // Get the Firebase Auth instance
    const currentUser = auth.currentUser; // Get the logged-in user

    if (currentUser) {
      const userId = currentUser.uid; // User ID
      const userName = currentUser.email; // Default to 'Anonymous' if no display name

      if (Number(question.answer) === parseInt(checked) + 1) {
        setCorrect(true);
        await incrementScore(userId, userName); // Update the user's score
      } else {
        setInCorrect(true);
      }
    } else {
      console.error('No user is currently logged in');
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          borderWidth: isCorrect ? 2 : isInCorrect ? 2 : 0,
          borderColor: isCorrect ? 'lightgreen' : isInCorrect ? 'red' : 'none',
        },
      ]}
    >
      <Text>Question By: {question.questionBy}</Text>
      <Text style={styles.question}>{question.question}</Text>
      <RadioButton.Group onValueChange={handleChange} value={checked}>
        {question.choices.map((choice, index) => (
          <RadioButton.Item
            key={index}
            style={styles.choice}
            label={choice}
            labelStyle={{ color: 'black' }}
            value={index}
            status={checked === index ? 'checked' : 'unchecked'}
            disabled={disable}
          />
        ))}
      </RadioButton.Group>

      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={{ color: 'black' }}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    margin: 20,
  },
  question: {
    fontSize: 24,
  },
  choice: {
    color: 'black',
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    shadowColor: 'gray',
    shadowRadius: 10,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    width: 80,
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
    shadowColor: 'gray',
    shadowRadius: 10,
  },
});
