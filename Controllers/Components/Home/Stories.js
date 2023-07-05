import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { USERS } from '../../data/users';

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index} style={{ alignItems: 'center'}}>
            <Image source={{ uri: story.image }} style={styles.story} />
            <Text style={{ marginLeft: 10, color: 'black' }}>
              {story.user.length > 11
                 ? story.user.slice(0, 10).toLowerCase() + '...'
                : story.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  story: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginLeft: 18,
    borderWidth: 3,
    borderColor: '#ff8501',
  },
})

export default Stories





