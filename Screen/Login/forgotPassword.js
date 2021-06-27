import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
    const { sendPasswordResetEmail } = useAuth();
    const navigation = useNavigation();

    const [email, setEmail] = useState('');

    const handleSubmit = useCallback(() => {
        if (sendPasswordResetEmail(email)) navigation.navigate('Login');
    }, [sendPasswordResetEmail, navigation, email]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fordot password</Text>
            <View>
                <TextInput
                    style={styles.inputField}
                    value={email}
                    placeholder="email"
                    onChangeText={setEmail}
                />
            </View>
            <Button title="Submit" onPress={handleSubmit} disabled={!email} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingTop: '60%',
        paddingHorizontal: 10,
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
    },
});

export default ForgotPassword;
