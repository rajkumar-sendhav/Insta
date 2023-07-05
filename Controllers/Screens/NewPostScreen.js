import { SafeAreaView } from 'react-native'
import React from 'react'
import AddNewPost from '../Components/newPost/AddNewPost'

const NewPostScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AddNewPost navigation={navigation} />
    </SafeAreaView>
  )
}

export default NewPostScreen
