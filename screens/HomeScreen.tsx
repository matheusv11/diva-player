import { StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>

      {/* USAR UMA LIST VIEW, RECYCLER VIEW OU FLAT LIST */}
      <ScrollView>
      {[1,2,3,4,5,6,7].map((x, i) => (
        <View style={styles.musicList} key={i}>
          <Text style={styles.musicTitle}> Top Músicas da Semana </Text>

          <View style={styles.musicCard}>
            <ScrollView horizontal={true}>
              {[1,2,3,4,5,6,7].map((y, ind) => (
                <Image source={require('../assets/images/bang.jpg')} style={styles.musicImage} key={ind}/>
              ))}
            </ScrollView>
          </View>
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
    width: "100%",
    marginTop: 20,
    backgroundColor: 'black'
  },
  musicCard:{
    flexDirection: 'row',
    backgroundColor: 'red',
    // width: "25%",
    // width: 80,
    // height: "100%", // AJUSTÁVEL PELO TAMANHO DAS IMAGENS
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