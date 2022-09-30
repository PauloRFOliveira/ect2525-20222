import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Te amo</Text>
      <StatusBar style="auto" />
      <Image source={{ uri: 'https://www.infoescola.com/wp-content/uploads/2017/05/universidade-federal-do-rio-grande-do-norte-ufrn-original.png'}} style={styles.ufrn}/>
      <Image source={require('./assets/images/pernalonga.png')} style={styles.pernalonga}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#0f0',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  ufrn: {
    width: 150,
    height: 150,
  },
  pernalonga: {
    width: 100,
    height: 100,
  },
});
