import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';

import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../firebaseConfig';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const nav = useNavigation();

  const [user, setUser] = useState(null);
  const [scoreData, setScoreData] = useState({ score: null }); // State for score

  useEffect(() => {
    const auth = FIREBASE_AUTH;

    // Listen for changes in the authentication state
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);

        // Fetch user score
        try {
          const docRef = doc(FIRESTORE_DB, 'scores', user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setScoreData(docSnap.data()); // Assuming the document has 'score' fields
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error fetching score data:', error);
        }
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  if (!user) {
    // User is not logged in
    return <Text>Please log in to view your profile.</Text>;
  }

  const [userName] = user.email.split('@');

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity style={styles.picture}>
          <FontAwesome5 name="user-alt" size={40} color="black" />
        </TouchableOpacity>
        <View>
          <Text style={styles.userName}>{userName}</Text>
        </View>
      </View>

      <View style={styles.details}>
        {/* Display user  score */}
        <Text style={styles.detailText}>Score: {scoreData.score ?? 'Loading...'}</Text>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => {
            nav.navigate('Sign Up');
          }}
        >
          <AntDesign name="logout" size={24} color="white" />
          <Text style={[styles.detailText, { color: 'white' }]}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },

  profileContainer: {
    backgroundColor: '#424769',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  picture: {
    backgroundColor: '#fff',
    padding: 40,
    margin: 40,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: 'gray',
  },

  userName: {
    color: 'white',
    fontSize: 30,
    fontWeight: '200',
    padding: 60,
    margin: 10,
  },
  details: {
    display: 'flex',
    gap: 30,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },

  detailText: {
    color: 'black',
    fontSize: 25,
  },

  logoutButton: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: 150,
    alignItems: 'center',
    borderRadius: 20,
  },
});
