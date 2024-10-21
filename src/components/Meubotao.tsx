import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


interface BotaoPersonalizadoProps {
  title: string;  
  cor: string;    
  onPress: () => void;  
}

export default function ButtonComponent({ title, cor, onPress }: BotaoPersonalizadoProps) {
  return (
    <TouchableOpacity
      style={[styles.botao, { backgroundColor: cor }]}
      onPress={onPress}
    >
      <Text style={styles.textoBotao}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
  },
});
