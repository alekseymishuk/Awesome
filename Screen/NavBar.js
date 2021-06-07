import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './home';
import Profile from './profile';
import LoginStackScreen from './Login/loginStackScreen';
import Signup from './signup';
import { useAuth } from '../hooks/useAuth';

const Tab = createBottomTabNavigator();

export default NavBar = () => {
    const { user } = useAuth();
    console.log("user", user)
    return (
        <NavigationContainer>
            <Tab.Navigator>
            {!!user ?
                    <>
                        <Tab.Screen name="Home" component={Home} />
                        <Tab.Screen name="Profile" component={Profile} />
                    </>
                :
                    <>
                        <Tab.Screen name="Login" component={LoginStackScreen} />
                        <Tab.Screen name="Signup" component={Signup} />

                    </>
            }
            </Tab.Navigator>
        </NavigationContainer>
    );
}