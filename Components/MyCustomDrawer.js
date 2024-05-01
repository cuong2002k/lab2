import { View, Text } from 'react-native'
import React from 'react'
import { Drawer } from 'react-native-paper'
import { ContactStackNavigtion, FavoriteStackNavigtion, OptionsStackNavigtion } from '../Routers/StackNavigtion'

const MyCustomDrawer = ({ navigation }) => {
    return (
        <Drawer.Section>
            <Drawer.Item
                label='Contact'
                icon={"format-list-bulleted"}
                onPress={() => navigation.navigate("Home")}
            />

            <Drawer.Item
                label='Favorite'
                icon={"star"}
                onPress={() => navigation.navigate("Favorite")}
            />

            <Drawer.Item
                label='User'
                icon={"account"}
                onPress={() => navigation.navigate("User")}
            />
        </Drawer.Section>
    )
}

export default MyCustomDrawer