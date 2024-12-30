import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Medal from "./Medal";

export default function ScoreCard({ username, score, rank }) {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        {/* Username Section */}
        <Text numberOfLines={1} style={[styles.text, styles.username]}>
          {username}
        </Text>

        {/* Score Section */}
        <Text style={[styles.text, styles.score]}>{score}</Text>

        {/* Rank/Medal Section */}
        <View style={styles.rankContainer}>
          {rank <= 3 ? (
            <Medal rank={rank} />
          ) : (
            <Text style={[styles.text, styles.rank]}>{rank}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    shadowColor: "gray",
    shadowRadius: 10,
    margin: 2,
  },
  text: {
    color: "#000",
    fontSize: 16,
    textAlign: "center",
  },
  username: {
    flex: 2, // Allocate more space for the username
    textAlign: "left",
    paddingRight: 10, // Add spacing for better alignment
  },
  score: {
    flex: 1, // Allocate equal space for the score
    textAlign: "center",
  },
  rankContainer: {
    flex: 1, // Allocate equal space for the rank/medal
    justifyContent: "center",
    alignItems: "center",
  },
  rank: {
    fontWeight: "bold",
  },
});
