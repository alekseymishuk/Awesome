import React, { useCallback, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useAuth } from '../../hooks/useAuth';

function Login({ navigation }) {
    const { signin } = useAuth();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = useCallback(() => {
        signin(login, password);
    }, [signin, login, password]);

    const handleForgotPasswod = useCallback(() => {
        navigation.navigate('ForgotPassword');
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.inputField}
                value={login}
                placeholder="login or email"
                onChangeText={setLogin}
            />

            <TextInput
                style={styles.inputField}
                value={password}
                placeholder="password"
                onChangeText={setPassword}
                secureTextEntry
            />

            <View style={styles.button}>
                <Button title="Submit" onPress={handleSubmit} />
            </View>

            <View style={styles.fpContainer}>
                <Text onPress={handleForgotPasswod}>Forgot password?</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: '60%',
        paddingHorizontal: 10,
        backgroundColor: 'lightgrey',
        flexGrow: 1,
    },
    title: {
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: '700',
    },
    inputField: {
        borderColor: '#aaaaaa',
        borderStyle: 'solid',
        borderWidth: 1,
        width: '100%',
        borderRadius: 8,
        backgroundColor: 'white',
    },
    button: {
        paddingTop: 20,
    },
    fpContainer: {
        paddingTop: 20,
        alignItems: 'center',
    },
});

export default Login;
