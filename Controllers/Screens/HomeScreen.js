import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Header from '../Components/home/Header'
import Stories from '../Components/home/Stories';
import Post from '../Components/home/Post';
import { POSTS } from '../data/posts';
import BottomTabs, { bottomTabIcons } from '../Components/home/BottomTabs';
import { db } from '../firebase';

function HomeScreen({ navigation }) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collectionGroup('posts')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(post => ({ id: post.id, ...post.data() })))
      })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
       <Header navigation={navigation} />
      <Stories />
      <ScrollView>
      {posts.map((post, index) => (
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