import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Avatar, Divider } from "react-native-paper"
const ContactListItem = ({ item, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <View style={styles.row}>
                <Avatar.Image size={40} source={{ uri: item.avatar }} />
                <View style={styles.info}>
                    <Text>{item.name}</Text>
                    <Text>{item.phone}</Text>
                </View>
            </View>
            <Divider />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'

    },
    row: {
        flexDirection: 'row',
        padding: 10,
        flex: 1,
    },
    info: {
        marginLeft: 30
    }
})
export default ContactListItem;