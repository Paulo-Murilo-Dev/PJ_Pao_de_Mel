import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ElPrimo = () => {
    const [n1, setN1] = useState(0);
    const [resultado, setResultado] = useState('');

    const calcular = () => {
        const n1Too = parseFloat(n1);
        if (n1Too % 2 !== 0) {
            setResultado('ELLLL PRIMOOOO');
        } else {
            setResultado('Não ELLLL PRIMOOOO');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.result}>{resultado}</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite um número"
                onChangeText={text => setN1(text)}
                keyboardType="numeric"
            />

            <Button title="É primo?" onPress={calcular} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    result: {
        fontSize: 20,
        marginBottom: 10,
    },
    input: {
        width: 200,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
    },
});

export default ElPrimo;
