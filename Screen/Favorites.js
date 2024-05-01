import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchContacts } from "../Utility/Api"
import { ActivityIndicator, Avatar, List } from 'react-native-paper';
import { FlatList } from 'react-native';



const Favorites = ({ navigation }) => {
    const [contacts, setContacts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const renderItem = ({ item }) => {
        const { avatar } = item;
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Profile", { contact: item })
                }
                }
            >
                <Avatar.Image size={70} source={{ uri: avatar }} style={{ margin: 20 }} />
            </TouchableOpacity>
        );
    }

    useEffect(() => {
        fetchContacts().then(
            data => {
                setContacts(data);
                setIsLoading(false);
                setIsError(false);
            }
        ).catch((e) => {
            console.log(e);
            setIsLoading(false);
            setIsError(true);
        })
    }, [])

    const favorite = contacts.filter(contact => contact.favorite);

    return (
        <View style={styles.container}>
            {isLoading && <ActivityIndicator size="large" />}
            {isError && <Text>Error...</Text>}
            {!isError && !isLoading && (
                <FlatList
                    data={favorite}
                    renderItem={renderItem}
                    numColumns={3}
                    contentContainerStyle={styles.flatlist}
                />
            )}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    flatlist: {
        alignItems: "center"
    }
})
export default Favorites