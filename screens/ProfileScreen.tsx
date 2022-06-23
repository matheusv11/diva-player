import { useState, useContext, useEffect } from 'react';
import { StyleSheet, Image } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { AuthContext } from '../components/AuthProvider';
import axios from '../utils/axios';

export default function ProfileScreen({ navigation }: RootTabScreenProps<'Home'>) {

  const { token } = useContext(AuthContext)
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    axios.get('/user-info', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      setUserInfo(res.data)
    })
    .catch(err => {
      alert(err)
    })
  }, [])
  return (
    <View style={styles.container}>

      <View style={styles.profileTop}>
        <Image source={require('../assets/images/bang.jpg')} style={styles.profilePic}/>

        <Text>{userInfo.nome}</Text>
      </View>

      <View style={styles.profileList}>

          <Text style={styles.profileLabel}> Email </Text>
          <Text style={styles.profileDescription}> {userInfo.email} </Text>

      </View>

      <View style={styles.profileList}>

        <Text style={styles.profileLabel}> Nome </Text>
        <Text style={styles.profileDescription}> {userInfo.nome} </Text>

      </View>

      <View style={styles.profileList}>

        <Text style={styles.profileLabel}> Alterar Senha </Text>
        <Text style={styles.profileDescription}> Alterar Senha </Text>

      </View>

      <View style={styles.profileList}>

        <Text style={styles.profileLabel}> Versão </Text>
        <Text style={styles.profileDescription}> 1.0.0 </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileTop:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    padding: 4, // OU MARGIN RIGHT E LEFT EM AMBOS
    width: "100%",
  },
  profileList: {
    width: "100%",
    marginTop: 20,
    paddingLeft: 4,
  },
  profilePic: {
    width: 112, 
    height: 112,
    borderRadius: 100,
  },
  profileLabel: {
    fontSize: 22,
    fontWeight: "bold"
  },
  profileDescription: {
    fontSize: 14,
  }
});