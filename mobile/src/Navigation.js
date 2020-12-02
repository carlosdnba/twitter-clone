import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather, Ionicons, FontAwesome } from '@expo/vector-icons';

import HomeScreen from './screens/Home';
import SearchScreen from './screens/Search';
import MessagesScreen from './screens/Messages';
import NotificationsScreen from './screens/Notifications';

const Tab = createBottomTabNavigator();

const icons = {
    Home: {
        lib: AntDesign,
        name: 'home'
    },
    Search: {
        lib: Feather,
        name: 'search'
    },
    Notifications: {
        lib: FontAwesome,
        name: 'bell-o'
    },
    Messages: {
        lib: AntDesign,
        name: 'mail'
    },
}

function Navigation() {
    return (
        <Tab.Navigator
            screenOptions= {({ route }) => ({
                tabBarIcon: ({ color }) => {

                    const { lib: Icon, name } = icons[route.name];
                    return <Icon name={name} size={24} color={color} />;
                },
            })}
            tabBarOptions={{
                style: {
                    backgroundColor: '#000',
                    borderTopColor: 'rgba(255, 255, 255, 0.2)',
                    height: 60,

                },
                activeTintColor: '#1da1f2',
                inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
                showLabel: false
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeScreen}
            />

            <Tab.Screen 
                name="Search" 
                component={SearchScreen}
            />
            
            <Tab.Screen 
                name="Notifications" 
                component={NotificationsScreen}
            />
            
            <Tab.Screen 
                name="Messages" 
                component={MessagesScreen}
            />
        </Tab.Navigator>
    );
}

export default Navigation;


{/* <AntDesign name="home" size={24} color="black" /> */}
{/* <Feather name="search" size={24} color="black" /> */}
{/* <Ionicons name="ios-notifications" size={24} color="black" /> */}
{/* <Ionicons name="ios-notifications-outline" size={24} color="black" /> */}
{/* <FontAwesome name="send" size={24} color="black" />*/}
{/* <FontAwesome name="send-o" size={24} color="black" />  */}

