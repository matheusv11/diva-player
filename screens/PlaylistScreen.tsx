import { useContext, useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

import { Text, View, Icon} from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { AuthContext } from '../components/AuthProvider';
import axios from '../utils/axios';

export default function PlaylistScreen({ navigation }: RootTabScreenProps<'Home'>) {

  const { token } = useContext(AuthContext);
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    axios.get("/all-playlists", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      setPlaylist(res.data)
    })
    .catch(err => {
      alert(err)
    })
  }, []);

  return (
    <View style={styles.container}>

      <View style={styles.playlistTop}>
        <Text style={styles.playlistTopText}>Playlist</Text>
        <TouchableOpacity>
          <Icon
            name="plus-circle"
            size={35}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
      {playlist.map(play => (
        <View style={styles.musicList} key={play.id}>

            <Image source={{ uri: play.musica_playlist[0].thumbnail }} style={styles.musicImage}/>
            <Text style={styles.musicTitle}> {play.nome} </Text>

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
  playlistTop:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    padding: 4,
    width: "100%"
  },
  playlistTopText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  musicList: {
    flexDirection: 'row',
    width: "100%",
    alignItems: 'center',
    marginTop: 20,
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