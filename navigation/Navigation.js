import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';

//nav set up
const RootStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//screens
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "#ffffff", // Set the global background color
    },
};


function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={Home}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}


function ProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ProfileScreen"
                component={Profile}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

//Bottom tab screens
function TabNavigation() {
    return (


        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {

                    paddingTop: 4,
                    elevation: 0, // Remove shadow on Android
                    shadowOpacity: 0, // Remove shadow on iOS
                    borderTopWidth: 0, // Remove the border on the top of the tab bar
                },
                tabBarActiveTintColor: "#2A4CD5", // Active icon color
                tabBarInactiveTintColor: "#57577B", // Inactive icon color
                tabBarLabelStyle: {
                    fontSize: 11,
                    fontFamily: 'RedditSans_400Regular',
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    headerShown: false,
                    title: "Home",
                    // tabBarIcon: ({ focused, size, color }) => {
                    //     return focused ? (
                    //         <MyJobsIconActive
                    //             width={size || 24}
                    //             height={size || 24}
                    //         />
                    //     ) : (
                    //         <MyJobsIconInactive
                    //             width={size || 24}
                    //             height={size || 24}
                    //         />
                    //     )
                    // }
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={{
                    headerShown: false,
                    title: "Profile",
                    // tabBarIcon: ({ focused, size, color }) => {
                    //     return focused ? (
                    //         <MyJobsIconActive
                    //             width={size || 24}
                    //             height={size || 24}
                    //         />
                    //     ) : (
                    //         <MyJobsIconInactive
                    //             width={size || 24}
                    //             height={size || 24}
                    //         />
                    //     )
                    // }
                }}
            />
        </Tab.Navigator>


    )
}

export default function Navigation() {
    return (
        <NavigationContainer theme={Theme}>
            <RootStack.Navigator>
                <RootStack.Screen
                    name="TabNavigation"
                    component={TabNavigation}
                    options={{ headerShown: false }}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}