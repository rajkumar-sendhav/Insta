import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Divider } from '@rneui/themed'

export const bottomTabIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/?size=512&id=1iF9PyJ2Thzo&format=png',
        inactive: 'https://img.icons8.com/?size=512&id=i6fZC6wuprSu&format=png'
    },
    {
        name: 'Search',
        active: 'https://img.icons8.com/?size=512&id=2sWrwEXiaegS&format=png',
        inactive: 'https://img.icons8.com/?size=512&id=TQPOC8XaUqZ0&format=png'
    },
    {
        name: 'Reels',
        active: 'https://img.icons8.com/?size=512&id=YoIaSvIehcuI&format=png',
        inactive: 'https://img.icons8.com/?size=512&id=PxI9IPCyBAOD&format=png'
    },
    {
        name: 'Profile',
        active: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYTkzIC4GL3vUa5BY2ERWU6ImasOVhxFpd4Tr-IMLjhSbZfnupZd3TLeFAd3djKQgTPxw&usqp=CAU',
        inactive: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYTkzIC4GL3vUa5BY2ERWU6ImasOVhxFpd4Tr-IMLjhSbZfnupZd3TLeFAd3djKQgTPxw&usqp=CAU'
    },
]

const BottomTabs = ({ icons }) => {
    const [activeTab, setActiveTab] = useState('Home')

    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image 
                source={{ uri: activeTab == icon.name ? icon.active : icon.inactive }} 
                style={[
                    styles.icon, 
                    icon.name == 'Profile' ? styles.profilePic() : null,
                    activeTab == 'Profile' && icon.name == activeTab ? styles.profilePic(activeTab) : null,
                ]} 
            />
        </TouchableOpacity>
    )
    return (
        <View style={styles.wrapper}>
            <Divider width={1} orientation='vertical' />
            <View style={styles.container}>
                {icons.map((icon, index) => (
                    <Icon key={index} icon={icon} />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: '3%',
        zIndex: 999,
        backgroundColor: '#fff',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10,
    },
    icon: {
        width: 30,
        height: 30,
    },
    profilePic: (activeTab = '') => ({
        borderRadius: 50,
        borderWidth: activeTab == 'Profile' ? 2 : 0,
        borderColor: '#000',
    }),
})

export default BottomTabs