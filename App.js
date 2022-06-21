import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import styles from './AppEstilo';
import Titulo from './components/Titulo';
import Noragami from './components/Noragami';
import Given from './components/Given';
import Tog from './components/Tower of God';

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo/>     
      <Text style={styles.Text}>Noragami</Text>
      <Noragami/> 
      <Text style={styles.Text}>Given</Text>
      <Given/>    
      <Text style={styles.Text}>To wer of God</Text>
      <Tog/>
      <StatusBar style="auto" />
    </View>
  );
}