import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = (props) => {
    const { title, style, onPress,textStyle } = props
    return (
        <TouchableOpacity style={[styles.buttonStyle, style]} onPress={onPress}>
            <Text style={[styles.buttonLabel, textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    buttonStyle: {
        height: 55,
        width: '92%',
        backgroundColor: '#000000',
        borderRadius: 12,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonLabel: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600'
    }
})