import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useAuth } from '../hooks/useAuth';

const Signup = () => {
    const { signup } = useAuth();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = useCallback(() => signup(login, password), [
        login,
        password,
    ]);

    const isMismatch = confirmPassword !== '' && password !== confirmPassword;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Signup</Text>
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
                keyboardType={'autoCompleteType'}
                secureTextEntry
            />
            <TextInput
                style={styles.inputField}
                value={confirmPassword}
                placeholder="confirm password"
                keyboardType={'autoCompleteType'}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />
            {isMismatch && (
                <Text style={styles.mismatchText}>password mismatch </Text>
            )}
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: '60%',
        paddingHorizontal: 10,
    },
    title: {
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: '700',
    },
    inputField: {
        borderColor: '#AAAAAA',
        borderStyle: 'solid',
        borderWidth: 1,
        width: '100%',
    },
    mismatchText: {
        color: '#999999',
    },
});

export default Signup;
