import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SignUp from '../screen/SignUp'
import Login from '../screen/Login'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

const SignContainer = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name = "SignUp" component={SignUp} options = {{
            // headerShown : false,
            tabBarIcon: ({ focused }) => focused ?<FontAwesome name="sign-in" size={24} color="blue" />: <FontAwesome name="sign-in" size={24} color="gray" />,
                    animation: "slide_from_left", headerBackVisible: false,
            headerStyle : {
                backgroundColor : '#1F2544',
                
            },
            headerTitleStyle: {
                color: 'white',
                fontSize: 20,
                fontWeight: '200',
            },
        }}/>
        <Tab.Screen name = "Login" component={Login} options = {{
            // headerShown : false,
            tabBarIcon: ({ focused }) => focused ?<Entypo name="login" size={24} color="blue" /> : <Entypo name="login" size={24} color="gray" />,
                    animation: "slide_from_left", headerBackVisible: false,
            headerStyle : {
                backgroundColor : '#1F2544',
                
            },
            headerTitleStyle: {
                color: 'white',
                fontSize: 20,
                fontWeight: '200',
            },
        }}/>
    </Tab.Navigator>
  )
}

export default SignContainer