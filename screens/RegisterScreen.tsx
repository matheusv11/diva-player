import { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // Pode importar sem o * também

// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function RegisterScreen({ navigation }: RootTabScreenProps<'Register'>) {

  const [profilePic, setProfilePic] = useState(null);

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

      <TouchableOpacity onPress={pickProfile} style={styles.profilePic}>
        {profilePic ? <Image source={{ uri: profilePic }} style={{ width: 80, height: 80, borderRadius: 50 }} /> : <Text> Foto </Text>}
      </TouchableOpacity>
      <TextInput style={styles.input} placeholder='Nome' keyboardType='email-address'/>
      <TextInput style={styles.input} placeholder='Email' keyboardType='email-address'/>
      <TextInput style={styles.input} placeholder='Senha' keyboardType='visible-password'/>
      <TextInput style={styles.input} placeholder='Repetir Senha' keyboardType='visible-password'/>
      <TouchableOpacity onPress={register} style={styles.loginButton}>
        <Text style={styles.title}> CADASTRAR </Text>
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
    bottom: 40,
  },
  profilePic: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});