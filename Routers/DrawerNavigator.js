import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Contacts from '../Screen/Contacts';
import Favorites from '../Screen/Favorites';
import User from '../Screen/User';
import MyCustomDrawer from '../Components/MyCustomDrawer';
import { FavoriteStackNavigtion, ContactStackNavigtion, OptionsStackNavigtion } from './StackNavigtion';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <MyCustomDrawer {...props} />}
        >
            <Drawer.Screen
                name="Home"
                component={ContactStackNavigtion}
            />
            <Drawer.Screen
                name="Favorite"
                component={FavoriteStackNavigtion}
            />
            <Drawer.Screen
                name="User"
                component={OptionsStackNavigtion}
            />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator
