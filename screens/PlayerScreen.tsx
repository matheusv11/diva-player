import { useContext, useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Image} from 'react-native';
import { Audio } from 'expo-av';

import { Text, View, Icon} from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { AuthContext } from '../components/AuthProvider';
import axios from '../utils/axios';

export default function PlaylistScreen({ navigation, route }: RootTabScreenProps<'Home'>) {

  const { token } = useContext(AuthContext);
  const [songData, setSongData] = useState({}); // OS DADOS
  const [isPlaying, setIsPlaying] = useState(false); // STATUS DE TOQUE
  const [sound, setSound] = useState(); // OQUE TOCA

  useEffect(() => {
    const musicId = route.params.musicId
    axios.get(`/musica/${musicId}`)
    .then(res => {
      setSongData(res.data)
    })
    .catch(err => {
      alert(err)
    })
  }, [])

    useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  
  const playSong = async () => {
    setIsPlaying(!isPlaying)

    if(sound) {
      return isPlaying ? sound.pauseAsync() : sound.playAsync();
    }

    const { sound: soundToPlay } = await Audio.Sound.createAsync(
       {
         headers: {
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36"
         },
         uri: songData.url
       }
    );
      
    setSound(soundToPlay)
    console.log('Playing Sound');
    await soundToPlay.playAsync(); 
  }

  const forward = () => {
    // if(sound) {
    //   console.log("Algo está tocando")
    //   sound.unloadAsync();
    // }
  }
  
  return (
    <View style={styles.container}>
      <Image source={{ uri: songData.thumbnail }} style={styles.songThumbnail}/>
      <Text style={styles.songTitle}> {songData.nome} </Text>
      <View style={styles.actionButtons}>
        <Icon name="backward" size={35} style={styles.actionIcon}/>
        <TouchableOpacity onPress={playSong}>
          <Icon name={!isPlaying ? "play" : "pause"} size={35} style={styles.actionIcon}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={forward}>
          <Icon name="forward" size={35} style={styles.actionIcon}/>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  songThumbnail: {
    // marginBottom: 240,
    width: 242, 
    height: 242,
  },
  actionButtons: {
    marginTop: 52,
    flexDirection: 'row',
  },
  songTitle: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: 'bold'
  },
  actionIcon: {
    marginLeft: 20,
    marginRight: 20,
  },
  playlistTop:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    width: "100%"
  },
  playlistTopText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  musicList: {
    flexDirection: 'row',
    width: "100%",
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  musicListLeft: {
    flexDirection: 'row',
    width: "50%",
    alignItems: 'center',
  },
  musicListRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  musicImage: {
    width: 112, 
    height: 112,
    marginLeft: 18,
  },
  musicTitle: {
    marginLeft: 6,
    marginBottom: 6,
    fontSize: 12,
    fontWeight: "bold"
  },
  musicTrash: {
    // marginHorizontal: 
  },
  input: {
    height: 45,
    borderRadius: 8,
    paddingLeft: 12,
    width: 340,
  },
  closeButton: {
    width: 120,
    top: 20,
    marginLeft: 12,
    marginRight: 12,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalButtons: {
    flexDirection: 'row'
  },
  closeButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  centeredModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: 'transparent',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  modalView: {
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
});