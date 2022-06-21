import { StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function ProfileScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>

      {/* USAR UMA LIST VIEW, RECYCLER VIEW OU FLAT LIST */}
      <View style={styles.profileTop}>
        <Image source={require('../assets/images/bang.jpg')} style={styles.profilePic}/>

        <Text>Super ultra</Text>
      </View>
      {/* SEM SCROLL VIEW, TEM TAMANHO PRA CABER EM TELA */}
      {[1,2,3,4].map((x, i) => (
        <View style={styles.profileList} key={i}>

            <Text style={styles.profileLabel}> Email </Text>
            <Text style={styles.profileDescription}> math@gmail.com </Text>

        </View>
      ))}
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
    backgroundColor: 'green'
  },
  profileList: {
    width: "100%",
    marginTop: 20,
    paddingLeft: 4,
    backgroundColor: 'black',
  },
  profilePic: {
    width: 112, 
    height: 112,
    borderRadius: 100,
  },
  profileLabel: {
    color: 'blue',
    fontSize: 22,
  },
  profileDescription: {
    color: 'green',
    fontSize: 14,
  }
});