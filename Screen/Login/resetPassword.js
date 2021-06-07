import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import Login from './login';
useNavigation

const ResetPassword = () => {

    const { confirmPasswordReset } = useAuth();
    const navigation = useNavigation();
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = () => {
        if(confirmPasswordReset(code, password))
            navigation.navigate(Login)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Reset password</Text>
            <TextInput 
                style={styles.inputField} 
                value={password} placeholder="password" 
                onChangeText={setPassword} 
                keyboardType={"autoCompleteType"} 
                secureTextEntry 
            />
            <TextInput 
                style={styles.inputField} 
                value={confirmPassword} 
                placeholder="confirm password" 
                keyboardType={"autoCompleteType"} 
                onChangeText={setConfirmPassword} 
                secureTextEntry
            />
            <TextInput 
                style={styles.inputField}
                value={code}
                placeholder="code"
                onChangeText={setCode}
            />
            
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


export default ResetPassword;