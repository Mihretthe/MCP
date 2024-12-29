// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import AppContainer from './container/AppContainer';
// import SignUp from './screen/SignUp';
// import Login from './screen/Login';
import SignContainer from './container/SignContainer';
import ScoreBoard from './screen/ScoreBoard';
const Stack = createStackNavigator()
export default function App() {
  return (
    // <ScoreBoard />
  
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'Sign Up' component={SignContainer} options = {{
            headerShown : false,
            
            }} />
        <Stack.Screen name = ' ' component={AppContainer} options={{

          headerShown : false,
        }}/>
        </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
