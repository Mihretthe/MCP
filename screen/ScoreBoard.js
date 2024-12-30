import { View, Text, StyleSheet, ActivityIndicator, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { FIRESTORE_DB } from "../firebaseConfig"; // Import your Firestore config
import ScoreCard from "../components/ScoreCard";

export default function ScoreBoard() {
  const [scores, setScores] = useState([]); // State to store scores
  const [loading, setLoading] = useState(true); // State to show loading indicator

  useEffect(() => {
    // Fetch scores from Firestore
    const fetchScores = async () => {
      try {
        const scoresRef = collection(FIRESTORE_DB, "scores");
        const scoresQuery = query(scoresRef, orderBy("score", "desc")); // Order by score descending
        const querySnapshot = await getDocs(scoresQuery);

        const scoresList = querySnapshot.docs.map((doc, index) => ({
          id: doc.id,
          ...doc.data(),
          rank: index + 1, // Assign rank based on the sorted order
        }));

        setScores(scoresList); // Update the scores state
      } catch (error) {
        console.error("Error fetching scores:", error);
      } finally {
        setLoading(false); // Hide loading indicator
      }
    };

    fetchScores();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading Scores...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={scores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ScoreCard username={item.userName.split('@')[0]} score={item.score} rank={item.rank} />
        )}
        ListHeaderComponent={() => (
          <ScoreCard username={"Username"} score={"Score"} rank={"Rank"} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
