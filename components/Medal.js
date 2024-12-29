import { Image, StyleSheet, View } from 'react-native';

export default function Medal({rank}) {
  
  return <View style={styles.container}>
    {rank == 1? <Image source={require('../assets/gold-medal.png')} style={styles.medal} />: rank == 2? <Image source={require('../assets/silver-medal.png')} style={styles.medal} />: <Image source={require('../assets/bronze.png')} style={styles.medal} /> }
  </View>
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  medal: {
    width: 50,
    height: 50,
  },
});


