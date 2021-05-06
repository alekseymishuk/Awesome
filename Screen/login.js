import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useAuth } from '../hooks/useAuth';

const Login = (props) => {
    console.log('props', props);

    const { signin } = useAuth();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => signin(login, password);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View>
            <TextInput style={styles.inputField} value={login} placeholder="login or email" onChangeText={setLogin} />
            </View>
            <View>
            <TextInput style={styles.inputField} value={password} placeholder="password" onChangeText={setPassword} />
            </View>
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        paddingTop: '60%',
        paddingHorizontal: 10,
    },
    title: {
        alignSelf: "center",
        fontSize: 24,
        fontWeight: "700"
    },
    inputField: {
        borderColor: "#aaaaaa",
        borderStyle: "solid",
        borderWidth: 1,
        width: "100%"
    },
  });


export default Login;