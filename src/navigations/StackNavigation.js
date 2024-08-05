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
import DrawerNavigation from './DrawerNavigation'
import JsFunction from '../screens/JsFunctions'
import TimerComponent from '../screens/TimerComponent'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}initialRouteName='TimerComponent' >
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="MapScreen" component={MapScreen} />
                <Stack.Screen name="TabNavigation" component={TabNavigation} />
                <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="ListandFonts" component={ListandFonts} />
                <Stack.Screen name="ListComponent" component={ListComponent} />
                <Stack.Screen name="JsFunction" component={JsFunction} />
                <Stack.Screen name="TimerComponent" component={TimerComponent} />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation
const styles = StyleSheet.create({})