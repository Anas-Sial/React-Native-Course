import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR, FONTS } from '../../enums/StyleGuide'

const ListComponent = () => {

    const studentInformation = [
        { name: 'Ali', rollNumber: '23', userImage: require('../../assets/images/user1.jpeg'), email: 'anas@gmail.com', },
        { name: 'ahmad', rollNumber: '24', userImage: require('../../assets/images/user1.jpeg'), email: 'anas@gmail.com', },
        { name: 'Anas', rollNumber: '25', userImage: require('../../assets/images/user2.jpg'), email: 'xpert@gmail.com', },
        { name: 'Aamir', rollNumber: '26', userImage: require('../../assets/images/user2.jpg'), email: 'anas@gmail.com' },
        { name: 'Aamir', rollNumber: '26', userImage: require('../../assets/images/user2.jpg'), email: 'anas@gmail.com' },
        { name: 'Aamir', rollNumber: '26', userImage: require('../../assets/images/user2.jpg'), email: 'anas@gmail.com' },
        { name: 'Aamir', rollNumber: '26', userImage: require('../../assets/images/user2.jpg'), email: 'anas@gmail.com' },
        { name: 'Aamir', rollNumber: '26', userImage: require('../../assets/images/user2.jpg'), email: 'anas@gmail.com' },
        { name: 'Aamir', rollNumber: '26', userImage: require('../../assets/images/user2.jpg'), email: 'anas@gmail.com' },
        { name: 'Aamir', rollNumber: '26', userImage: require('../../assets/images/user2.jpg'), email: 'anas@gmail.com' },
        { name: 'Aamir', rollNumber: '26', userImage: require('../../assets/images/user2.jpg'), email: 'anas@gmail.com' },

    ]


    return (
        <View style={styles.container}>

            <FlatList
                data={studentInformation}
                // horizontal
                // numColumns={2}
                keyExtractor={(index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.studentCard}>
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
        backgroundColor: '#fff'
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
})