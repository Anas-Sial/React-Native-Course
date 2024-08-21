import { Alert, Button, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React from 'react'

const ApiMethods = () => {
    //ActivityIndicator
    
    // const fetchData = async () => {

    //     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    //     const data = await response.json()
    //     console.log("Line 16 ::: ", data)
    // }

    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            ToastAndroid.show('Data is fetched!', ToastAndroid.Lo)
            console.log("Line 16 ::: ", data)
        } catch (error) {
            Alert.alert('Network request failed')
        }
    }

    return (
        <View>
            <Button title='Get Data' onPress={() => fetchData()} />
        </View>
    )
}

export default ApiMethods

const styles = StyleSheet.create({})