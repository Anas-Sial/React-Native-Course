import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator()

const TabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} >
            {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    // tabBarLabel: 'Home dsf',
                    tabBarIcon: ({ color, size, focused }) => (
                        <AntDesign name="home" color={focused ? "red" : 'gray'} size={size} />
                    ),
                }}
            />
            {/* <Tab.Screen name="Profile" component={ProfileScreen} /> */}
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size, focused }) => (
                        <AntDesign name="user" color={focused ? "red" : 'gray'} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigation

const styles = StyleSheet.create({})