import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Button, Divider } from 'react-native-paper'

const Option = ({ navition }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={{ paddingTop: 10, paddingBottom: 10 }}>Update Profile</Text>
                <Divider />
            </View>
            <View style={styles.item}>
                <Text style={{ paddingTop: 10, paddingBottom: 10 }}>Change Languages</Text>
                <Divider />
            </View>
            <View style={styles.item}>
                <Text style={{ paddingTop: 10, paddingBottom: 10 }}>Sign Out</Text>
                <Divider />
            </View>
        </View>
    )
}

export default Option

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10
    },
})