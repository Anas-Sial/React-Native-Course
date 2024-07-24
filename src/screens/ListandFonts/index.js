import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { studentData } from '../../data'
import StudentList from '../../components/StudentList'

const ListandFonts = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={studentData}
                keyExtractor={(index) => index.toString()}
                renderItem={({ item, index }) => <StudentList item={item} />}
            />
        </View>
    )
} 

export default ListandFonts

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})