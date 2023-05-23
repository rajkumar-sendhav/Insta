import { SafeAreaView } from 'react-native'
import React from 'react'
import AddNewPost from '../Components/newPost/AddNewPost'

const NewPostScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AddNewPost />
    </SafeAreaView>
  )
}

export default NewPostScreen
