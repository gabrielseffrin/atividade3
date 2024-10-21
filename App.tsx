import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ButtonComponent from './src/components/Meubotao'; 
import animals from './src/mocks/mockData';
import Card from './src/components/Card';

export default function App() {
  const [message, setMessage] = useState(''); 

  
  const handleButtonPress = () => {
    setMessage('O botão foi pressionado!'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mensagem: {message}</Text>

      <ButtonComponent title="Pressione-me" cor="#007BFF" onPress={handleButtonPress} />

      <FlatList
        data={animals}
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({ item }) => (
          <Card>
            <Card.Header title={`Animal ${item.id}`} />

            <Card.Body>
              <Text>Nome: {item.nome}</Text>
              <Text>Espécie: {item.especie}</Text>
            </Card.Body>

            <Card.Footer footerText="Informações adicionais" />
          </Card>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  especie: {
    fontSize: 14,
    color: '#555',
  },
});
