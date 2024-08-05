import { Alert, Button, StyleSheet, View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

const JsFunction = () => {
    const [data, setData] = useState(0)

    useEffect(() => {
        const interval = setTimeout(() => {
            Alert.alert('asd', 'asdsaf')
        }, 3000);
        return () => clearInterval(interval)
    }, [])

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>

            <Button title='Increment' onPress={() => setData(0)} />
            <Text style={{ color: 'black' }}>{data}</Text>
        </View>
    )
}

export default JsFunction

const styles = StyleSheet.create({})