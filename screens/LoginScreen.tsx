import { StyleSheet } from 'react-native';
import { Text, View, Input, Button } from '../components/Themed';
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
      <Button onPress={login} style={styles.loginButton}>
        <Text style={styles.title}> ENTRAR </Text>
      </Button>
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
