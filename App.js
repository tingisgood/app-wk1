import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>我是李芷婷，我很可愛!</Text>
      <Text>學號是110919028</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#599',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
