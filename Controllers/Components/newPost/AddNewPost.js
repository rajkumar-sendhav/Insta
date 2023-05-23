import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost = () => {
    return (
        <View style={styles.container}>
            <Header />
            <FormikPostUploader />
        </View>
    )
}

const Header = () => (
    <View style={styles.headerContainer}>
            <TouchableOpacity>
                <Image
                    source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/free-back-arrow-1767531-1502435.png' }}
                    style={{ width: 30, height: 30 }}
                />
            </TouchableOpacity>
            <Text style={styles.headerText}>NEW POST</Text>
            <Text></Text>
        </View>
)

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        color: '#000',
        fontWeight: '700',
        fontSize: 20,
        marginRight: 23,
    },
})


export default AddNewPost