import { View, Text, Image, StyleSheet } from 'react-native'
import { useLocalSearchParams } from 'expo-router' 
import React,{useContext} from 'react'
import { DataContext } from '../../context/DataContext.js'
import noimage from '../../../assets/images/noimage.jpeg'

const DetailScreen = () => {
  const {findMovieById} = useContext(DataContext)
  const {id}= useLocalSearchParams();
  const movie = findMovieById(id);
  const noCountry = 'No Country';
  console.log(movie);

  function convertToHoursAndMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;  
  
    
    return `${hours}hr ${remainingMinutes}m`;
  }
  
    return (
    <View>
      <View style = {styles.imgContainer}>
        <Image source={{uri: movie.show?.image?movie.show.image.original: noimage.uri}}
        style={styles.img}/>
      </View>

      <View style={{padding: 15, paddingStart: 20}}>
        <View style= {styles.detail}>
          <View style={{flex: 1, flexDirection: 'row', gap: 5}}>
            <Text style={styles.info}>{movie.show?.premiered?movie.show.premiered.slice(0, 4):'0000'}</Text>
            <Text style={styles.info}>{movie.show.network?.country? movie.show.network.country.name:noCountry}</Text>
          </View>
          <Text style={styles.info}>{convertToHoursAndMinutes(movie.show.averageRuntime)}</Text>
        </View>

        <View style={{marginTop: 5,display:'flex',flexDirection:'row'}}>
          <Text style={styles.info}>Genre: </Text>
          <Text style={styles.font}>{movie.show.genres.join(', ')}</Text>
        </View>

        <View style={{marginTop: 10}}>
          <Text style={styles.title}>{movie.show.name}</Text>
          <Text style={styles.summary}>{movie.show.summary.replace(/<\/?p>|<\/?b>|\u003Cp/g, '')}</Text>
        </View>

        <View style={styles.commonCon}>
          <Text style={styles.info}>Rating: </Text>
          <Text style={styles.font}>{movie.show.rating?.average?movie.show.rating?.average: 'No Rating'}</Text>
        </View>

        <View style={styles.commonCon}>
          <Text style={styles.info}>TvMaze: </Text>
          <Text style={styles.link}>{movie.show.url}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  link: {
    color: 'white',
    fontWeight: '400',
    fontSize: 17,
    textDecorationLine: 'underline',
    maxWidth: 250
  },

  commonCon:{
    marginTop: 7,
    display: 'flex',
    flexDirection: 'row'
  },
  summary:{
    color: 'rgb(190,190,190)',
    fontSize: 13,
    fontWeight: '400'
  },
  font: {
    color: 'white',
    fontWeight: '400',
    fontSize: 17,
  },

  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },

  detail: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  info: {
    color: 'gray',
    fontSize: 17,
    fontWeight: '500'

  },

  imgContainer: {
    width: '100%',
    height: 400,
  },

  img: {
    minWidth: '100%',
    height: '100%',
    resizeMode: 'stretch'
  },
})

export default DetailScreen