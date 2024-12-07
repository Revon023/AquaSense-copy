/*import { 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView, 
    Image, 
    ScrollView, 
    Modal, 
    TouchableOpacity } from 'react-native';

import data from "../data/membersData.js";
import Cards from "../components/Membercard.js";
import Colors from "../constants/Colors.js";

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
});*/

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Modal, TouchableOpacity } from 'react-native';
import data from "../data/membersData.js";
import Cards from "../components/Membercard.js";
import Colors from "../constants/Colors.js";

const Stack = createStackNavigator();

function App() {
    return (
        <View style={styles.container}>
            <Text>AboutUs</Text>
        </View>
    );
}

function Login({ navigation }) {
    const signIn = () => navigation.navigate("App");

    const [selectedMember, setSelectedMember] = React.useState(null);
    const [modalVisible, setModalVisible] = React.useState(false);

    const openModal = (member) => {
        setSelectedMember(member);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedMember(null);
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: "rgba(0,0,0,0.1)" }]}>
            <ScrollView>
                <Image source={require('../assets/background.png')} style={styles.backgroundImage} />

                <View style={styles.initialContainer}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={styles.backButton}>{"<"}</Text>
                        </TouchableOpacity>
                        <View style={{ marginHorizontal: 24, marginVertical: 24 }}>
                            <Text style={styles.title}>About Us</Text>
                        </View>
                    </View>

                    <Text style={[styles.h1, { fontWeight: "500" }]}>
                        Our mission is to make a safe environment that takes ensuring safety measure.
                    </Text>

                    {data.map((item) => (
                        <Cards
                            key={item.id}
                            picture={item.picture}
                            name={item.name}
                            assign={item.assign}
                            onPress={() => openModal(item)}
                        />
                    ))}
                </View>
                <View style={{ height: 24 }}></View>
            </ScrollView>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        {selectedMember && (
                            <>
                                <View style={styles.modalTitle}>
                                    <Image
                                        source={selectedMember.picture}
                                        style={{
                                            width: 60,
                                            height: 60,
                                            borderRadius: 40,
                                        }}
                                    />
                                    <View style={{
                                        paddingHorizontal: 12,
                                        flex: 1,
                                        flexWrap: "nowrap",
                                    }}>
                                        <Text style={styles.h1}>
                                            {selectedMember.name}
                                        </Text>
                                        <Text style={styles.small}>
                                            {selectedMember.assign}
                                        </Text>
                                    </View>
                                </View>

                                <Text style={styles.small}>
                                    {selectedMember.description}
                                </Text>
                                <TouchableOpacity
                                    style={styles.closeButton}
                                    onPress={closeModal}
                                >
                                    <Text style={styles.h2White}>Close</Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

export default function Main() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="App" component={App} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        position: "absolute",
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        opacity: 0.05,
    },
    initialContainer: {
        width: "100%",
        paddingHorizontal: 24,
    },
    modalBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    modalContainer: {
        backgroundColor: Colors.PRIMARY,
        marginHorizontal: 24,
        paddingHorizontal: 24,
        borderRadius: 27,
    },
    modalTitle: {
        marginVertical: 24,
        flexDirection: "row",
        alignItems: "center",
    },
    closeButton: {
        backgroundColor: Colors.SECONDARY,
        borderRadius: 27,
        marginVertical: 24,
        paddingVertical: 12,
        marginHorizontal: 24,
        alignItems: "center",
    },
    backButton: {
        fontSize: 40,
        color: Colors.TEXTblack,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    h1: {
        fontSize: 20,
    },
    small: {
        fontSize: 16,
    },
    h2White: {
        fontSize: 18,
        color: '#fff',
    },
});