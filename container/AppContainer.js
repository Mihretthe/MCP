import { View, Text } from 'react-native'


// Icons
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

//Screens
import Profile from '../screen/Profile';
import Settings from '../screen/Settings';
import Feed from '../screen/Feed';
import AddQuestion from '../screen/AddQuestion';



import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

const AppContainer = () => {
  return (
    
        <Tab.Navigator>
            <Tab.Screen name = "Feed" component={Feed} 
                options={{                        
                    // tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => focused ?<FontAwesome name="home" size={24} color="blue" />  : <FontAwesome name="home" size={24} color="gray" />,
                    animation: "slide_from_left", headerBackVisible: false, headerStyle: {
                        backgroundColor: '#1F2544',
                    },
                    headerTitleStyle: {
                        color: 'white',
                        fontSize: 20,
                        fontWeight: '200',
                    },
                    // headerShown: false,
            }}
            />
            <Tab.Screen name = "Add Question" component={AddQuestion} 
                options={{                        
                    // tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => focused ?<Ionicons name="add-circle" size={24} color="blue" /> : <Ionicons name="add-circle" size={24} color="gray" />,
                    animation: "slide_from_left", headerBackVisible: false, headerStyle: {
                        backgroundColor: '#1F2544',
                    },
                    headerTitleStyle: {
                        color: 'white',
                        fontSize: 20,
                        fontWeight: '200',
                    },
                    // headerShown: false,
            }}
            />
            <Tab.Screen name = "Profile" component={Profile} 
                options={{                        
                    // tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => focused ?<Feather name="user" size={24} color="blue" />  : <Feather name="user" size={24} color="gray" />,
                    animation: "slide_from_left", headerBackVisible: false, headerStyle: {
                        backgroundColor: '#1F2544',
                    },
                    headerTitleStyle: {
                        color: 'white',
                        fontSize: 20,
                        fontWeight: '200',
                    },
                    // headerShown: false,
            }}
            />
            {/* <Tab.Screen name = "Settings" component={Settings} 
                    options={{                        
                        // tabBarShowLabel: false,
                        tabBarIcon: ({ focused }) => focused ?<AntDesign name="setting" size={24} color="blue" /> : <AntDesign name="setting" size={24} color="gray" />,
                        animation: "slide_from_left", headerBackVisible: false, headerStyle: {
                            backgroundColor: '#1F2544',
                        },
                        headerTitleStyle: {
                            color: 'white',
                            fontSize: 20,
                            fontWeight: '200',
                        },
                        // headerShown: false,
                }}
            /> */}
        </Tab.Navigator>
    
  )
}

export default AppContainer