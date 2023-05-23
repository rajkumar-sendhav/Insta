import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { USERS } from '../../Data/Users';

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index} style={{ alignItems: 'center'}}>
            <Image source={{ uri: story.image }} style={styles.story} />
            <Text style={{ marginLeft: 10, color: 'black' }}>
              {story.user.length > 11
                ? story.user.slice(0, 12).toLowerCase() + '...'
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
    marginLeft: 16,
    borderWidth: 3,
    borderColor: '#ff8501',
  },
})

export default Stories





