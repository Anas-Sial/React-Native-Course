import { StyleSheet} from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import TabNavigation from './TabNavigation'
import MapScreen from '../screens/MapScreen'
import ListandFonts from '../screens/ListandFonts'
import ListComponent from '../screens/ListComponent'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}initialRouteName='ListComponent' >
                <Stack.Screen name="MapScreen" component={MapScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="TabNavigation" component={TabNavigation} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="ListandFonts" component={ListandFonts} />
                <Stack.Screen name="ListComponent" component={ListComponent} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation
const styles = StyleSheet.create({})