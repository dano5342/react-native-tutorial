import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Screen from'../components/Screen';
import ListItemSeperator from '../components/ListItemSeparator';
import Icon from '../components/Icon.js'
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

const menuItems = [
    {
      title: "My Listings",
      icon: {
        name: "format-list-bulleted",
        backgroundColor: colors.primary,
      },
    },
    {
      title: "My Messages",
      icon: {
        name: "email",
        backgroundColor: colors.secondary,
      },
    },
];

export default function AccountScreen() {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Daniel Ellis"
                    subTitle="ellis.daniel0@gmail.com"
                    image={require('../assets/mosh.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(menuItems) => menuItems.title}
                    ItemSeparatorComponent={ListItemSeperator}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon 
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                        />
                    )}
                />
            </View>
            <ListItem
                title="Log Out"
                IconComponent={<Icon name="logout" backgroundColor={colors.yellow}/>}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light
    },
    container: {
        marginVertical: 20,
    }
})