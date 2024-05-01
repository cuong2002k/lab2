import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Favorites from '../Screen/Favorites';
import User from '../Screen/User';
import Contacts from '../Screen/Contacts';
import { FavoriteStackNavigtion, ContactStackNavigtion, OptionsStackNavigtion } from './StackNavigtion';
import { Button } from 'react-native-paper';

const Tabs = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen
                name="Contact" 
                component={ContactStackNavigtion}
                options={{
                    tabBarIcon: "format-list-bulleted",
                    title: "Contact"
                }}

            />
            <Tabs.Screen
                name="Favorite"
                component={FavoriteStackNavigtion}
                options={{
                    tabBarIcon: "star",
                    title: "Favorite"
                }}
            />
            <Tabs.Screen
                name="User"
                component={OptionsStackNavigtion}
                options={{
                    tabBarIcon: "account",
                    title: "User",

                }} />
        </Tabs.Navigator>
    )
}

export default BottomTabNavigator
