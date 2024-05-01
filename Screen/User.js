import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchUserContact } from '../Utility/Api';
import { ActivityIndicator, Avatar, Button, Icon } from 'react-native-paper';

const User = ({ navigation }) => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        fetchUserContact().
            then(
                (user) => {
                    setIsError(false)
                    setIsLoading(false)
                    setUser(user)
                }
            ).catch(e => {
                console.log(e)
                setIsError(true)
                setIsLoading(false)
            })
        navigation.setOptions({
            headerRight: () => <Button icon={"cogs"} textColor='black' onPress={() => {
                navigation.navigate("Options")
            }} />
        })
    }, [])
    const { avatar, name, phone } = user;
    return (
        <View
            style={styles.container}
        >
            {isLoading && <ActivityIndicator size="large" />}
            {isError && <Text>Error....</Text>}
            {!isError && !isLoading && (
                <View
                    style={styles.container}
                >
                    <Avatar.Image source={{ uri: avatar }} size={100} style={{ margin: 10 }} />
                    <Text style={[styles.text, { fontSize: 18 }]}>{name}</Text>
                    <Text style={styles.text}>
                        <Icon source={"phone"} color="white" size={16} />
                        {phone}
                    </Text>
                </View>
            )}
        </View>
    )
}

export default User

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4793AF",
    },
    text: {
        fontSize: 16,
        color: "white"
    }
})