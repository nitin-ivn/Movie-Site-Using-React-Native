import { View, Text,StyleSheet, FlatList, Image} from 'react-native'
import React,{useContext} from 'react'
import { DataContext } from '../context/DataContext'
import MovieCard from '../../components/MovieCard'
import Entypo from '@expo/vector-icons/build/Entypo'
import Feather from '@expo/vector-icons/build/Feather'
import Fontisto from '@expo/vector-icons/build/Fontisto'
import { Link } from 'expo-router'

const app = () => {
  const {movies} = useContext(DataContext);
  console.log(movies);

  return (
    <View style = {{padding: 20}}>
      <View style = {styles.topbar}>
        <Entypo name="menu" size={24} color="white" />
        <Fontisto name="netflix" size={24} color="red" />
        <Link href='/search'>
          <Feather style={styles.cursorPointer} name="search" size={24} color='white' />
        </Link>
      </View>
      {/* <FlatList  
          data={movies}  
          keyExtractor={(item) => item.show.id.toString()}  
          renderItem={({ item }) => <MovieCard movie={item} />}  
      /> */}

      <View style={styles.grid}>
        {movies.map((movie, index) => (  
        <MovieCard key={index} movie={movie} />  
      ))}
      </View>
    </View>
  )
}

let styles = StyleSheet.create({
  grid: {  
    paddingTop: 10,
    flexDirection: 'row',  
    flexWrap: 'wrap',
    justifyContent: 'space-between',  
  },
  title:{
    color: 'white',
    textAlign: 'center',
    fontSize: 120,
    fontWeight: 'bold'
  },

  topbar: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    minHeight: 30,
    justifyContent: 'space-between'
  },

  logo: {
    height: 'auto'
  },

  cursorPointer: {
    cursor: 'pointer'
  }
})

export default app