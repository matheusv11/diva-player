import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function LoginScreen({ navigation }: RootTabScreenProps<'Login'>) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Email' keyboardType='email-address'/>
      <TextInput style={styles.input} placeholder='Senha' keyboardType='visible-password'/>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.title}> ENTRAR </Text>
      </TouchableOpacity>
      {/* <Text style={styles.title}>Login</Text> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 45,
    marginBottom: 14,
    bottom: 40,
    borderRadius: 8,
    paddingLeft: 12,
    width: 340,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  loginButton: {
    backgroundColor: 'green',
    width: 120,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
