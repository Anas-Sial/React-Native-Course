import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TimerComponent = () => {
    const [seconds, setSeconds] = useState(60)
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        let interval = null
        if (isActive && seconds > 0) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1)
            }, 1000)
        } else if (seconds === 0) {
            clearInterval(interval)
            setIsActive(false)

        }
        return () => clearInterval(interval)
    }, [isActive, seconds])

    const toggle = () => {
        setIsActive(!isActive)
    }

    const reset = () => {
        setSeconds(60)
        setIsActive(false)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.timerText}>{seconds}s</Text>
            <View style={styles.buttonContainer}>
                <Button onPress={toggle} title={isActive ? 'Pause' : 'Start'} />
                <Button onPress={reset} title="Reset" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#262626'
    },
    timerText: {
        fontSize: 48,
        marginBottom: 20,
        color: '#fff',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 200,
    },
});

export default TimerComponent;

    /*
    - First we create a state of seconds and its initial value is 60 
    - than we have created another state name isActive with initial value false 
    - we created useEffect because when screen renders or re-renders we want to call functions and states inside useEffect
    - first we declare interval and its initial value is null we use variable let because as we learn in our previous lectures we can change values using let within the scope
    - than we applied a condition if the active is true and seconds is greater than 0 than start timer by decrementing -1 on every 1000 miliseconds
    - stop timer when seconds === 0 in else if block
    - dependency array [] we have call isActive and seconds state mean useEffect call every time when something changes in the field
    */