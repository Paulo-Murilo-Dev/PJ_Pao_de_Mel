import React, {useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const DoubleNumber = () => {
    const [number, setNumber] = useState('');
    const [result, setResult] = useState('');

    const handleDouble = () => {
        const inputNumber = parseFloat(number);
        if (!isNaN(inputNumber)){
            const doubleNumber = inputNumber * 2;

            setResult(`O dobro de ${inputNumber} é ${doubleNumber}`);
        }
        else{
                setResult("por favor, insira um número válido")
            }
        }
    
    return (
        <View style={StyleSheet.container}>

            <Text style={styles.result}>{result}</Text>
            <TextInput style={styles.input}
            placeholder="Digite um número"
            onChangeText={text => setNumber(text)}
            keyboardType="numeric"/>

            <Button title="calcular o dobro" onPress={handleDouble} />


        </View>
        
            
        
    )
    
    
}
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


  export default DoubleNumber;
