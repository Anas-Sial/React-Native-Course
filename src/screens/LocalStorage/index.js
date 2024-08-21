import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LocalStorage = () => {
    const [userName, setUserName] = useState('')
    // const [userData, setUserData] = useState([])

    const saveData = async () => {
        await AsyncStorage.setItem('UserName', 'Xpertspot')
        await AsyncStorage.setItem('RollNo', '23')
        await AsyncStorage.setItem('StudentsData', JSON.stringify({ name: 'sdas', rollNo: 'asda' }))
        console.log('Data is Saved!')
    }

    const getData = async () => {
        const name = await AsyncStorage.getItem('UserName')
        const rollNo = await AsyncStorage.getItem('RollNo')
        const students = await AsyncStorage.getItem('StudentsData')
        const parsed = JSON.parse(students)
        setUserName(parsed.name)
        console.log(name)
        console.log(rollNo)
        console.log(parsed)
    }


    const removeData = async () => {
        await AsyncStorage.removeItem('UserName')
        await AsyncStorage.removeItem('RollNo')
        await AsyncStorage.removeItem('StudentsData')
        console.log('data is removed')
    }



    return (
        <View style={{ height: 200, justifyContent: 'space-between' }}>
            <Button title='Save Data' onPress={() => saveData()} />

            <Button title='Get Data' onPress={() => getData()} />

            <Button title='Remove Data' onPress={() => removeData()} />

            <Text style={{ color: 'black', fontWeight: 'bold' }}>{userName}</Text>

        </View>
    )
}

export default LocalStorage

const styles = StyleSheet.create({})