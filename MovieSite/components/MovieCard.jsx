import { View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import noimage from '../assets/images/noimage.jpeg'
import { useRouter } from 'expo-router'

const MovieCard = ({movie}) => {
    const router = useRouter();
    return (
        <TouchableOpacity onPress={() => router.push(`details/${movie.show.id}`)}>
            <View style={styles.card}>
                <Image source={{uri: movie.show.image?movie.show.image.medium: noimage.uri}}
                style={{width: 100, height: 150}} />
                <Text style={{color:'white',textAlign:'center'}}>{movie.show.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

let styles = StyleSheet.create({
    card: {
        width: 100,
        height: 200,
    }
})

export default MovieCard