import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './home';
import Login from './login';
import Signup from './signup';
import { useAuth } from '../hooks/useAuth';

const Tab = createBottomTabNavigator();

export default NavBar = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
            {useAuth.user ?
                    <>
                        <Tab.Screen name="Home" component={Home} />
                    </>
                :
                    <>
                        <Tab.Screen name="Login" component={Login} />
                        <Tab.Screen name="Signup" component={Signup} />

                    </>
            }
            </Tab.Navigator>
        </NavigationContainer>
    );
}