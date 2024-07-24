import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR, FONTS } from '../../enums/StyleGuide'

const StudentList = ({ item }) => {
    return (
        <View style={styles.studentCard}>
            <Image source={{ uri: item?.userImage }}
                style={styles.imageStyle} />
            <View style={{ marginLeft: '5%' }}>
                <Text style={styles.label}>Name : {item.name}</Text>
                <Text style={styles.label}>Class : {item.class}</Text>
                <Text style={styles.label}>Email : {item.email}</Text>
                <Text style={styles.label}>Department : {item.department}</Text>
            </View>
        </View>
    )
}

export default StudentList

const styles = StyleSheet.create({
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
})