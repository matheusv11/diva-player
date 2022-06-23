import { useState } from 'react';
import { StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

import { Input, Text, View, Icon} from '../components/Themed';
import { RootTabScreenProps } from '../types';
import axios from '../utils/axios';

export default function SearchScreen({ navigation }: RootTabScreenProps<'Home'>) {

  const [songs, setSongs] = useState([]);
  const [music, setMusic] = useState("");

  const searchSong = () => {
    axios.get(`/search-music?musica=${music}`)
    .then(res => {
      setSongs(res.data);
    })
    .catch(err => alert(err))
  }

  return (
    <View style={styles.container}>

      <View style={styles.searchTop}>
        <Input value={music} onChangeText={text => setMusic(text)} style={styles.input} placeholder='Música' keyboardType='default'/>
        <TouchableOpacity onPress={searchSong} style={styles.searchIcon}>
          <Icon
            name="search"
            size={38}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
      {songs.map(song => (
        <View style={styles.musicList} key={song.musicId}>

            <Image source={{ uri: song.thumbnail }} style={styles.musicImage}/>
            <Text numberOfLines={2} ellipsizeMode='tail' style={styles.musicTitle}> {song.name} </Text>

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
  searchTop:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    padding: 4,
    width: "100%"
  },
  searchIcon: {
    position: 'absolute',
    right: 32
  },
  input: {
    height: 45,
    borderRadius: 8,
    paddingLeft: 12,
    width: 340,
  },
  playlistTopText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  musicList: {
    flexDirection: 'row',
    width: "100%",
    alignItems: 'center',
    marginTop: 20
  },
  musicImage: {
    width: 112, 
    height: 112,
    marginLeft: 18,
  },
  musicTitle: {
    marginLeft: 6,
    marginBottom: 6,
    fontSize: 16,
    fontWeight: "bold"
  }
});