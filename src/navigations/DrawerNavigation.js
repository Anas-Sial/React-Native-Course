import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen'
import ListComponent from '../screens/ListComponent'
import TabNavigation from './TabNavigation'

const Drawer = createDrawerNavigator()
const DrawerNavigation = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Home" component={TabNavigation} />
            <Drawer.Screen name="List" component={ListComponent} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation

const styles = StyleSheet.create({})