import { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // Pode importar sem o * também

import { Text, View, Input, Button } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function RegisterScreen({ navigation }: RootTabScreenProps<'Register'>) {

  const [profilePic, setProfilePic] = useState(null); // TIPAR

  const pickProfile = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) setProfilePic(result.uri);
    
  };

  const register = async () => {
    // navigation.replace('Home')
    // FAZER UM AXIOS
    // SETAR UM TOKEN
    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>

      <Button onPress={pickProfile} style={styles.profilePic}>
        {profilePic ? <Image source={{ uri: profilePic }} style={{ width: 80, height: 80, borderRadius: 50 }} /> : <Text> Foto </Text>}
      </Button>
      <Input style={styles.input} placeholder='Nome' keyboardType='email-address'/>
      <Input style={styles.input} placeholder='Email' keyboardType='email-address'/>
      <Input style={styles.input} placeholder='Senha' keyboardType='visible-password'/>
      <Input style={styles.input} placeholder='Repetir Senha' keyboardType='visible-password'/>
      <Button onPress={register} style={styles.loginButton}>
        <Text style={styles.title}> CADASTRAR </Text>
      </Button>
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
    // bottom: 40,
  },
  profilePic: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    height: 80,
    width: 80,
    bottom: 70,
  },
  input: {
    height: 45,
    marginBottom: 14,
    bottom: 50,
    borderRadius: 8,
    paddingLeft: 12,
    width: 340
  },
  loginButton: {
    width: 120,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});