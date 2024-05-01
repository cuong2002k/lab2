import { ActivityIndicator } from "react-native-paper"
import { fetchContacts } from "../Utility/Api"
import ContactListItem from "../Components/ContactListItem"

const { useEffect, useState } = require("react")
const { TouchableOpacity, Text, TextInput, StyleSheet, FlatList } = require("react-native")
const { View } = require("react-native")

const Contacts = ({ navigation }) => {
    const [contacts, setContacts] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        fetchContacts()
            .then(data => {
                // console.log(data)
                setContacts(data)
                setIsLoading(false)
                setIsError(false)
            })
            .catch(e => {
                console.log(e)
                setIsLoading(false)
                setIsError(true)
            })
    }, [])

    const renderItem = ({ item }) => {
        return (
            <ContactListItem
                item={item}
                onPress={() => navigation.navigate("Profile", { contact: item })}
            />
        )
    }

    return (
        <View style={styles.container} >
            {isLoading && <ActivityIndicator size={40} color="red" />}
            {isError && <Text>Error Loading.....</Text>}
            <FlatList
                data={contacts}
                keyExtractor={item => item.id}
                renderItem={renderItem}

            />
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});
export default Contacts;