import { View, Text, StyleSheet,TextInput,Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Feather from '@expo/vector-icons/build/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DataContext } from '../context/DataContext'
import { useContext } from 'react';
import MovieCard from '../../components/MovieCard'

const search = () => {
  const { searchMovies , fetchSearchData, setSearchMovies } = useContext(DataContext);
  const [text, setText] = useState('');
  
  const handleInputChange = (inputText) => {
    setText(inputText);
  }

  const submitSearchTerm = () => {
    setSearchMovies([]);
    fetchSearchData(text);
  }

  return (
    <SafeAreaView>
      <View style={{padding: 15}}>
        <View style={{display:'flex', flexDirection: 'row',gap:0}}>
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={handleInputChange}
            placeholder="Enter text"
          />
          <Pressable onPress={submitSearchTerm} style={styles.searchBtn}>
            <Feather name="search" size={24} color= 'white' />
          </Pressable>
        </View>
        
        <View style={styles.grid}>
          {searchMovies.length > 0 ? (
              searchMovies.map((movie) => (
                  <MovieCard key={movie.show.id} movie={movie} />
              ))
          ) : (
              <Text>No Movie Found</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  grid: {  
    paddingTop: 10,
    flexDirection: 'row',  
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'space-between',  
  },

  searchBtn: {
    padding: 5,
    paddingHorizontal: 10,
    borderColor: 'rgb(70,70,70)',
    backgroundColor: 'rgb(50,50,50)',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    padding: 10,
    flex: 1,
    color: 'rgb(200,200,200)',
    backgroundColor: 'rgb(70, 70, 70)',
  }
});

export default search
