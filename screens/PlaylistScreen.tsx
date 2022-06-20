import { StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function PlaylistScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>

      {/* USAR UMA LIST VIEW, RECYCLER VIEW OU FLAT LIST */}
      <ScrollView>
      {[1,2,3,4,5,6,7].map((x, i) => (
        <View style={styles.musicList} key={i}>

            <Image source={require('../assets/images/bang.jpg')} style={styles.musicImage}/>
            <Text style={styles.musicTitle}> Rock </Text>

        </View>
      ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  musicList: {
    // flex: 1,
    // height: "25%", // DEIXAR AJUSTÁVEL AO TAMANHO DA IMAGEM, ASSIM NEM DEPENDE DE TELA
    flexDirection: 'row',
    width: "100%",
    alignItems: 'center', // COMO A IMG OCUPA TUDO, SO CENTRALIZA O TEXTO
    marginTop: 20,
    backgroundColor: 'black',
  },
  musicImage: {
    width: 112, 
    height: 112,
    marginLeft: 18,
  },
  musicTitle: {
    color: 'green',
    marginLeft: 6,
    marginBottom: 6,
    fontSize: 16,
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