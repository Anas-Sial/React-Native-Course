import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const data = [
    {
        id: 1,
        content: "Managing Stress"
    },
    {
        id: 2,
        content: "Mindfulness At Work"
    },
    {
        id: 3,
        content: "Mindfulness In Sport"
    },
    {
        id: 4,
        content: "Mindfulness Eating"
    },
    {
        id: 5,
        content: "Improving Performance"
    },
    {
        id: 6,
        content: "Attention And Concentration"
    },
    {
        id: 7,
        content: "Improving Relationships"
    },
    {
        id: 8,
        content: "Mindfulness In Education"
    }
];

const ListSelection = () => {
    const [selectedItems, setSelectedItems] = useState([]);

    console.log('line 42 :: ', selectedItems)
    const handleSelect = (item) => {
        const isSelected = selectedItems.some(selectedItem => selectedItem.id === item.id);
        if (isSelected) {
            setSelectedItems(selectedItems.filter(selectedItem => selectedItem.id !== item.id));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    const isSelected = selectedItems.some(selectedItem => selectedItem.id === item.id);
                    return (
                        <View style={styles.view2}>
                            <TouchableOpacity
                                style={[styles.button1, { backgroundColor: isSelected ? 'green' : 'white' }]}
                                onPress={() => handleSelect(item)}
                            >
                                <Text style={styles.text2}>{item.content}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    );
};

export default ListSelection;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    view2: {
        marginBottom: 10,
    },
    button1: {
        padding: 10,
        backgroundColor: '#ccc',
        borderRadius: 5,
    },
    selectedButton: {
        backgroundColor: '#4CAF50', // Change the color to indicate selection
    },
    text2: {
        color: '#000',
        fontSize: 16,
    },
});
