import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
  } from "react-native";
  import { useState } from "react";
  
  export default function App() {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
  
    const validationForm = () => {
      let errors = {};
  
      if (!Username) errors.Username = "Username is required";
      if (!Password) errors.Password = "Password is required";
  
      setErrors(errors);
  
      return Object.keys(errors).length === 0;
    };
  
    const HandleSubmit = () => {
      if (validationForm()) {
        console.log("Submitted", Username, Password);
        setUsername(""); 
        setPassword("");
        setErrors({});
      }
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          
  
          <Text style={styles.label}>User</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Username"
            value={Username}
            onChangeText={setUsername}
          />
          {errors.Username && <Text style={styles.errorText}>{errors.Username}</Text>}
  
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Password"
            value={Password}
            onChangeText={setPassword}
            secureTextEntry
          />
          {errors.Password && <Text style={styles.errorText}>{errors.Password}</Text>}
  
          <Button title="Login" onPress={HandleSubmit} />
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "cyan",
      justifyContent: "center",
      paddingHorizontal: 40,
    },
    form: {
      backgroundColor: "white",
      padding: 20,
      borderRadius: 10,
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
      fontWeight: "bold",
    },
    input: {
      height: 40,
      borderColor: "#ddd",
      borderWidth: 1,
      marginBottom: 15,
      padding: 10,
      borderRadius: 5,
    },
    /*image: {
      width: 200,
      height: 200,
      alignSelf: "center",
      marginBottom: 30,
    },*/

    errorText: {
      color: "red",
      marginBottom: 10,
    },
  });