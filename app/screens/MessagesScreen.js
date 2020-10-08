import React, { useState } from 'react';
// All USE functions imported from react are hooks to be used for function components only.
import { 
    FlatList, 
    StyleSheet,
    View 
} from 'react-native';

import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';


const initialMessages = [
    {
        id: 1,
        title: "t1",
        description: "d1",
        image: require("../assets/mosh.jpg"),
    },
    {
        id: 2,
        title: "t2",
        description: "d2",
        image: require("../assets/mosh.jpg"),
    },
]


export default function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);
    const handleDelete = message => {
        setMessages(messages.filter(m => m.id !== message.id))
        // Delete message from array
        // Change state, rerender
        // Call the server to also do the same on the backend (IN THE FUTURE)
    }

    return (
        <Screen>            
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("message selected", item)}
                        renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => 
                    setMessages([
                        initialMessages[1]
                    ])
                }
            />
        </Screen>
    )
}


const styles = StyleSheet.create({

})