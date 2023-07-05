import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { firebase } from '../../firebase'

const handleSignout = async () => {
  try {
    await firebase.auth().signOut()
    console.log('Signed out successfully!')
  } catch (error) {
    console.log(error)
  }
}

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handleSignout} >
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://www.pngitem.com/pimgs/m/132-1327993_instagram-logo-word-png-transparent-png.png',
          }}
        />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
      <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
          <Image
            style={styles.icon}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3161/3161837.png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/711/711349.png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
          <Image
            style={styles.icon}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/5948/5948514.png',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  tinyLogo: {
    width: 115,
    height: 40,
    resizeMode: 'contain',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 22,
    height: 22,
    margin: 12,
    resizeMode: 'contain',
  },
  unreadBadge: {
    backgroundColor: 'red',
    position: 'absolute',
    left: 20,
    bottom: 25,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  }, 
  unreadBadgeText: {
    color: 'white', 
    fontWeigth: '600',
  }, 
})

export default Header












