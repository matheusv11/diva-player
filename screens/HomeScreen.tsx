import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../components/AuthProvider';
import { StyleSheet, Image, ScrollView } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import axios from '../utils/axios';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  
  const { token } = useContext(AuthContext);
  const [topMusic, setTopMusic] = useState([]); // LIMPAR E SETAR INICIAL
  const [randomList, setRandomList] = useState([
    "Top Músicas da Semana", 
    "Suas Favoritas", 
    "MORBIUS", 
    "Para Curar o Chifre",
    "Spotligth"
  ])

  useEffect(()=> {
    axios.get("/top-musicas")
    .then(res => {
      setTopMusic(res.data)
    })
    .catch(err => {
      alert(err.response.data.error)
    })
  }, []);

  return (
    <View style={styles.container}>
      {/* USAR UMA LIST VIEW, RECYCLER VIEW OU FLAT LIST */}
      <ScrollView>
      {randomList.map(list => (
        <View style={styles.musicList} key={list}>
          <Text style={styles.musicTitle}> {list} </Text>

          <View style={styles.musicCard}>
            <ScrollView horizontal={true}>
              {topMusic.sort( () => .5 - Math.random() ).map(music=> (
                <Image source={{ uri: music.thumbnail}} style={styles.musicImage} key={music.musicId}/>
              ))}
              {/* {[1,2,3,4,5,6,7].map((y, ind) => (
                <Image source={require('../assets/images/bang.jpg')} style={styles.musicImage} key={ind}/>
              ))} */}
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
    width: "100%",
    marginTop: 20,
  },
  musicCard:{
    flexDirection: 'row',
  },
  musicImage: {
    width: 112, 
    height: 112,
    marginLeft: 18,
  },
  musicTitle: {
    marginLeft: 12,
    marginBottom: 6,
    fontSize: 16,
    fontWeight: 'bold',
  },
});