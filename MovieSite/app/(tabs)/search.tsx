import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const search = () => {
  return (
    <View>
      <Text>search</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});

export default search
