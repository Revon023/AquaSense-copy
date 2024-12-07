/*import { StyleSheet, Text, View } from 'react-native';
import ButtonStyle from '../components/ButtonStyle';

export default function App({navigation}) {
    const homePage = () => navigation.navigate("Login");
    return (
        <View style={styles.container}>
            <Text>Home - Water Level Analytics Dashboard</Text>
            <ButtonStyle title="Login" onPress={homePage} />
        </View>
    );
}*/

/*const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});*/

import { StyleSheet, Text, View } from 'react-native';
import ButtonStyle from '../components/ButtonStyle';

export default function HomePage({ navigation }) {
  const handleLogin = () => navigation.navigate("Login");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Water Level Analytics</Text>
        <Text style={styles.subtitle}>Dashboard</Text>
      </View>

      <View style={styles.content}>
        <ButtonStyle 
          title="Login" 
          onPress={handleLogin}
          style={styles.loginButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    color: '#7f8c8d',
    marginBottom: 20,
  },
  loginButton: {
    width: '80%',
    maxWidth: 300,
  }
});