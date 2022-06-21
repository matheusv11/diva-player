import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View, Input } from '../components/Themed';
import { RootTabScreenProps } from '../types';
// import Colors from '../constants/Colors';

export default function LoginScreen({ navigation }: RootTabScreenProps<'Login'>) {

  const login = async () => {
    navigation.replace('Home')
  }

  return (
    <View style={styles.container}>
      <Input style={styles.input} placeholder='Email' keyboardType='email-address'/>
      <Input style={styles.input} placeholder='Senha' keyboardType='visible-password'/>
      <TouchableOpacity onPress={login} style={styles.loginButton}>
        <Text style={styles.title}> ENTRAR </Text>
      </TouchableOpacity>
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
  },
  loginButton: {
    backgroundColor: 'black',
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
