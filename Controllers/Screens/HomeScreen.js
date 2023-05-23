import * as React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Header from '../Components/Home/Header'
import Stories from '../Components/Home/Stories';
import Post from '../Components/Home/Post';
import { POSTS } from '../Data/posts';
import BottomTabs, { bottomTabIcons } from '../Components/Home/BottomTabs';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default HomeScreen