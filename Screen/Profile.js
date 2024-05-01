import { useEffect, useState } from "react";
import { Image, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { fetchUserContact } from "../Utility/Api";
import { Avatar, Icon } from "react-native-paper";
import DetailsListItem from "../Components/DetailsListItem";


const Profile = ({ route, navigation }) => {

    const { avatar, email, phone, cell, name } = route.params.contact;
    return (
        <View style={styles.container}>
            <View
                style={styles.topView}
            >
                <Image source={{ uri: avatar }} style={styles.image} size={100} />
                <Text style={[styles.text, { fontSize: 18 }]}>{name}</Text>
                <Text style={styles.text}>
                    <Icon source={"phone"} color="white" size={16} />
                    {phone}
                </Text>
            </View>
            <View style={styles.bottomView}>
                <DetailsListItem icon={'email'} title={"Email"} subtitle={email} />
                <DetailsListItem icon={'phone'} title={"work"} subtitle={phone} />
                <DetailsListItem icon={'smartphone'} title={"Personal"} subtitle={cell} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "#4793AF",
    },
    bottomView: {
        flex: 1,
    },
    image: {
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "white",
        padding: 3,
        borderRadius: '50%',
        height: 100,
        width: 100
    },
    text: {
        fontSize: 16,
        color: "white"
    }
})
export default Profile;