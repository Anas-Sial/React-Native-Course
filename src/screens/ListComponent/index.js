import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLOR, FONTS } from '../../enums/StyleGuide'

const studentInformation = [
    { name: 'Ali', rollNumber: '23', userImage: require('../../assets/images/user1.jpeg'), email: 'anas@gmail.com', dueFee: 1000 },
    { name: 'Anas', rollNumber: '25', userImage: require('../../assets/images/user2.jpg'), email: 'xpert@gmail.com', dueFee: 1000 },
    { name: 'Aamir', rollNumber: '26', userImage: require('../../assets/images/user2.jpg'), email: 'anas@gmail.com', dueFee: 1000 },
    { name: 'Ahsan', rollNumber: '26', userImage: require('../../assets/images/user2.jpg'), email: 'anas@gmail.com', dueFee: 1000 },
    { name: 'Ali', rollNumber: '25', userImage: require('../../assets/images/user1.jpeg'), email: 'anas@gmail.com', dueFee: 1000 },

]

const ListComponent = () => {

    /* Map Function */
    const mapValue = studentInformation.map((item) => {
        return item?.name
    })

    /* ForEach Function */
    const eachValue = studentInformation.forEach((item) => {
        return item?.name
    })

    // console.log(eachValue)

    /* Filter Function */
    const filteredData = studentInformation.filter(item =>
        item?.name === 'Ali' && item?.rollNumber === '25'
    )

    /* Reducer Function */

    const sumofVal = studentInformation.reduce((acc, curr) => acc + curr.dueFee,
        0)

    // console.log('line 28 :: ', sumofVal)
    /* Operators */
    // let number = '5'
    // console.log('Line 22 :: ', number == 5)
    return (
        <View style={styles.container}>
            {/* <TextInput style={styles.inputContainer}
                placeholder='Enter Email'
                placeholderTextColor={'black'}
                value={search}
                onChangeText={handleSearch}
            /> */}
            <Text style={{ color: 'black' }}>{sumofVal}</Text>
            {/* To create Line */}
            {/* <View style={{ height: '40%', width: 2, backgroundColor: 'black' }} /> */}

            <FlatList
                data={filteredData}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.studentCard} key={index}>
                            <Text style={styles.label}>{index + 1}</Text>
                            <Image source={item?.userImage}
                                style={styles.imageStyle} />
                            <View style={{ marginLeft: '5%' }}>
                                <Text style={styles.label}>Name : {item?.name}</Text>
                                <Text style={styles.label}>Email : {item?.email}</Text>
                                <Text style={styles.label}>Roll No : {item.rollNumber}</Text>
                            </View>
                        </View>
                    )
                }}
            />

            {/* map Function */}

            {/* <ScrollView>
                {studentInformation.map((item, index) => (
                    <View style={styles.studentCard} key={index}>
                        <Text style={styles.label}>{index + 1}</Text>
                        <Image source={item?.userImage}
                            style={styles.imageStyle} />
                        <View style={{ marginLeft: '5%' }}>
                            <Text style={styles.label}>Name : {item?.name}</Text>
                            <Text style={styles.label}>Email : {item?.email}</Text>
                            <Text style={styles.label}>Roll No : {item.rollNumber}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView> */}

        </View>
    )
}

export default ListComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    studentCard: {
        // width: '90%',
        height: 100,
        // alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 12,
        marginTop: '4%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '2%'
    },
    imageStyle: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2
    },
    label: {
        fontSize: 16,
        color: 'black',
        fontFamily: 'PlusJakartaSans-SemiBold'
    },
    label2: {
        fontSize: 20,
        color: COLOR.black,
        fontFamily: FONTS.bold,
        marginLeft: '5%'
    },
    inputContainer: {
        height: 55,
        width: '92%',
        backgroundColor: 'white',
        borderRadius: 12,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        marginTop: '5%',
        color: 'black'
    },
})