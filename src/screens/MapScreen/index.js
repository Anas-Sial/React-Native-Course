import { Alert, Button, FlatList, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import CustomButton from '../../components/CustomButton';

const MapScreen = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [selected, setSelected] = useState('small')
    // console.log('line 09 ::', selected)

    //Array
    // const rollNumber = [23, 24, 25, 26, true, 'Anas']
    // console.log(rollNumber[3])
    // console.log(rollNumber.length)

    // Object
    // const userData = {
    //     name: 'Anas',
    //     class: 'Swen5A',
    //     department: 'Software'
    // }

    // console.log(userData.class, userData.name)
    const studentData = [
        {
            name: 'Anas',
            class: 'Swen8A',
            email: 'anas@gmail.com',
            department: 'CS',
            userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s'
        },
        {
            name: 'Ali',
            class: 'Swen8A',
            email: 'ali@gmail.com',
            department: 'Computer',
            userImage: 'https://media.licdn.com/dms/image/D4E12AQFAnM7JNyFDQg/article-cover_image-shrink_720_1280/0/1708148800306?e=2147483647&v=beta&t=YVyEgQPbE7DUjDtMEQ5DBs_NUxWX_z6mWn72IqCH03Q'
        },
        {
            name: 'Hassan',
            class: 'Swen8A',
            email: 'hassan@gmail.com',
            department: 'Software',
            userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s'
        },
        {
            name: 'Hassan',
            class: 'Swen8A',
            email: 'hassan@gmail.com',
            department: 'Software',
            userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s'
        },
        {
            name: 'Hassan',
            class: 'Swen8A',
            email: 'hassan@gmail.com',
            department: 'Software',
            userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s'
        },
        {
            name: 'Hassan',
            class: 'Swen8A',
            email: 'hassan@gmail.com',
            department: 'Software',
            userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s'
        },
        {
            name: 'Hassan',
            class: 'Swen8A',
            email: 'hassan@gmail.com',
            department: 'Software',
            userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s'
        },
        {
            name: 'Hassan',
            class: 'Swen8A',
            email: 'hassan@gmail.com',
            department: 'Software',
            userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s'
        },
        {
            name: 'Hassan',
            class: 'Swen8A',
            email: 'hassan@gmail.com',
            department: 'Software',
            userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s'
        },
        {
            name: 'Hassan',
            class: 'Swen8A',
            email: 'hassan@gmail.com',
            department: 'Software',
            userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s'
        },
    ]

    const sizeButtons = [
        { name: 'Small' },
        { name: 'Medium' },
        { name: 'Large' },
    ]

    return (
        <View style={styles.container}>

            {/* <Text style={styles.label2}>{studentData.length}</Text> */}

            {/* Map Function */}

            {/* <ScrollView>

                {studentData.map((item, index) => {
                    return (
                        <View style={styles.studentCard} key={index}>
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

                })}
            </ScrollView> */}

            <FlatList
                data={studentData}
                // horizontal
                // keyExtractor={(index) => index.toString()}
                // numColumns={2}
                renderItem={({ item, index }) => {
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
                }}
            />

            {/* <View style={{ width: '75%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%' }}>

                <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: selected === 'small' ? 'orange' : 'white' }]} onPress={() => setSelected('small')}>
                    <Text style={[styles.buttonLabel, { color: selected == 'small' ? 'white' : 'orange' }]}>Small</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: selected == 'medium' ? 'orange' : 'white' }]} onPress={() => setSelected('medium')}>
                    <Text style={[styles.buttonLabel, { color: selected == 'medium' ? 'white' : 'orange' }]}>Medium</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: selected == 'large' ? 'orange' : 'white' }]} onPress={() => setSelected('large')}>
                    <Text style={[styles.buttonLabel, { color: selected == 'large' ? 'white' : 'orange' }]}>Large</Text>
                </TouchableOpacity>
            </View> */}


            {/* Hint to manage backgroundColor color for map buttons
                create state --- initial value (0)
                onPress --- setSlected(index)
                selected === index */}

            {/* Size Buttons with Map Fuction */}
            <View style={{ width: '75%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%' }}>
                {sizeButtons.map((item, index) => (
                    <TouchableOpacity style={styles.buttonStyle} key={index}>
                        <Text style={styles.buttonLabel}>{item?.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>


            <Button title='Open Modal'
                onPress={() => setModalVisible(true)} />


            {/* Modal */}
            <Modal
                animationType='slide'
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <Entypo name='circle-with-cross' size={24} color={'black'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
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
        fontWeight: '700'
    },
    label2: {
        fontSize: 20,
        color: 'black',
        fontWeight: '800',
        marginLeft: '5%'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0, .1)'
    },
    modalView: {
        height: '50%',
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonStyle: {
        height: 35,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'orange',
        borderRadius: 20,
    },
    buttonLabel: {
        fontSize: 12,
        color: 'orange'
    }
})