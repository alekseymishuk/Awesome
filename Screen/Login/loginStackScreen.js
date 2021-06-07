import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./login"
import ForgotPassword from './forgotPassword';
import ResetPassword from './resetPassword';

const LoginStack = createStackNavigator();

export default LoginStackScreen = () => {
    return (
        <LoginStack.Navigator initialRouteName="Login">
            <LoginStack.Screen name="Login" component={Login} />
            <LoginStack.Screen name="ForgotPassword" component={ForgotPassword} />
            <LoginStack.Screen name="ResetPassword" component={ResetPassword} />
        </LoginStack.Navigator>
    );
}