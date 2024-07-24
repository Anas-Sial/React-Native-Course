import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../components/CustomButton'
import Entypo from 'react-native-vector-icons/Entypo';

const HomeScreen = ({ navigation, route }) => {

    const [counter, setCounter] = useState(0)
    const [visible, setVisible] = useState(true)

    //* Variable Types
    // const handle = () => {
    //     if (true) {
    //         var email = 'anas@gmail.com'

    //         email = 'xpert@gmail.com'
    //         console.log(email)
    //     }
    // }

    // let email = 'anas@gmail.com'

    // email = 'xpert@gmail.com'
    // console.log(route?.params?.email)

    //* Counter Types
    const handleDecrement = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    //* Array Methods
    // const rollNumbers = [23, 25, 26, 27, 28]
    // rollNumbers.push('Anas')
    // rollNumbers.pop()
    // console.log(rollNumbers)

    //*Declare an Array
    const data = [
        { name: 'Anas', class: 'SWEN-5A', rollNumber: 23, profileImage: 'https://bs-uploads.toptal.io/blackfish-uploads/components/seo/5923684/og_image/optimized/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png' },
        { name: 'Ali', class: 'SWEN-5A', rollNumber: 24, profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFwlTyKJZQTzAUHm3ClY49pHSKyWFu1a6l7A&s' },
        { name: 'Hassan', class: 'SWEN-5A', rollNumber: 25, profileImage: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg' },
    ]

    return (
        <View>

            {/* <CustomButton title='Back' onPress={() => handle()} /> */}
            {/* <Text>{route?.params?.userEmail}</Text> */}

            <View style={styles.counterContainer}>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => handleDecrement()}>
                    <Text style={styles.buttonLabel}>Remove</Text>
                </TouchableOpacity>
                <Text style={styles.counterLabel}>{counter}</Text>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => setCounter(counter + 1)}>
                    <Text style={styles.buttonLabel}>Add</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputField}
                    placeholder='Password'
                    secureTextEntry={visible}
                />
                <TouchableOpacity
                    onPress={() => setVisible(!visible)}>
                    <Entypo name={visible ? "eye-with-line" : "eye"} color={'black'} size={20} />
                </TouchableOpacity>
            </View>
            {/* 
            <View>
                <Text style={styles.label}>Name : Anas</Text>
                <Text style={styles.label}>class : SWEN-5A</Text>
                <Text style={styles.label}>rollNumber : 23</Text>
            </View>

            <View>
                <Text style={styles.label}>Name : Ali</Text>
                <Text style={styles.label}>class : SWEN-5A</Text>
                <Text style={styles.label}>rollNumber : 24</Text>
            </View>

            <View>
                <Text style={styles.label}>Name : Ali</Text>
                <Text style={styles.label}>class : SWEN-5A</Text>
                <Text style={styles.label}>rollNumber : 24</Text>
            </View>

            <View>
                <Text style={styles.label}>Name : Ali</Text>
                <Text style={styles.label}>class : SWEN-5A</Text>
                <Text style={styles.label}>rollNumber : 24</Text>
            </View> */}


            {data?.map((item, index) => {
                return (
                    <View style={{ marginTop: '4%', borderWidth: 1, }} key={index}>
                        <Text style={styles.label}>Name : {item?.name}</Text>
                        <Text style={styles.label}>class : {item?.class}</Text>
                        <Text style={styles.label}>rollNumber : {item?.rollNumber}</Text>
                        <View>
                            <Image source={{ uri: item.profileImage }} style={{ height: 50, width: 50 }} />
                        </View>
                    </View>
                )
            })}

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    counterContainer: {
        width: '70%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        alignSelf: 'center',
        marginTop: '6%'
    },
    buttonStyle: {
        height: 55,
        width: '32%',
        backgroundColor: '#000000',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonLabel: {
        color: '#ffffff',
        fontSize: 16,
    },
    counterLabel: {
        color: '#000000',
        fontSize: 18,
    },
    inputField: {
        width: '95%'
    },
    inputContainer: {
        height: 55,
        width: '92%',
        backgroundColor: 'gray',
        borderRadius: 12,
        alignSelf: 'center',
        marginTop: '4%',
        paddingHorizontal: '3%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        color: '#000000',
        fontSize: 18,
    }
})