import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    ScrollView, 
    Modal, 
    TouchableOpacity } from 'react-native';

import { useState } from 'react';
import data from "../data/membersData";
import images from "../data/images";


export default function App() {
    return (
        <View style={styles.container}>
            <Text>AboutUs</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});