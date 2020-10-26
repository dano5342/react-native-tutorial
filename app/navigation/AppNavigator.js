import React from 'react';
// Tabs for main app traversal
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountNavigator from './AccountNavigator'
import ListingEditScreen from '../screens/ListingEditScreen';
import FeedNavigator from './FeedNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedNavigator} />
        <Tab.Screen name="ListingEdit" component={ListingEditScreen} />
        <Tab.Screen name="Account" component={AccountNavigator} />
    </Tab.Navigator>
)

export default AppNavigator;