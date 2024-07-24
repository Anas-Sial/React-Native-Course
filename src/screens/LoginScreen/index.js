import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomButton from '../../components/CustomButton'
import { StackActions, useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign';

const LoginScreen = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')

    const navigateToDetails = () => {
        const action = StackActions.push('TabNavigation');
        navigation.dispatch(action)
    }

    useEffect(() => {
        console.log('called')
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>


            <TextInput style={styles.inputContainer}
                placeholder='Enter Email'
                value={email}
                onChangeText={(x) => setEmail(x)}
            />

            <TouchableOpacity onPress={navigateToDetails}>
                <AntDesign name="home" size={30} color="#900" />
            </TouchableOpacity>

            <CustomButton title='Login' onPress={() => navigation.navigate('DrawerNavigation', {
                screen: 'Home',
                params: { email: 'user@example.com' },
            })}
                style={{ marginTop: '4%' }} />


            {/* <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '70%', alignSelf: 'center', marginTop: '5%' }}>
                    <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: selected === 'small' ? 'orange' : 'white' }]}
                        onPress={() => setSelected('small')}>
                        <Text style={[styles.buttonLabel, { color: selected === 'small' ? 'white' : 'orange' }]}>Small</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: selected === 'medium' ? 'orange' : 'white' }]}
                        onPress={() => setSelected('medium')}>
                        <Text style={[styles.buttonLabel, { color: selected === 'medium' ? 'white' : 'orange' }]}>Medium</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: selected === 'large' ? 'orange' : 'white' }]}
                        onPress={() => setSelected('large')}>
                        <Text style={[styles.buttonLabel, { color: selected === 'large' ? 'white' : 'orange' }]}>Large</Text>
                    </TouchableOpacity>
                </View> */}
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    inputContainer: {
        height: 55,
        width: '92%',
        backgroundColor: 'white',
        borderRadius: 12,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        marginTop: '5%'
    },
})