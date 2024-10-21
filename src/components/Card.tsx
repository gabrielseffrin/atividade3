import React, { ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Card({ children }: { children: React.ReactNode }) {
  return <View style={styles.card}>{children}</View>;
}

Card.Header = ({ title }: { title: string }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{title}</Text>
  </View>
);

Card.Body = ({ children }: { children: ReactNode }) => (
  <View style={styles.body}>
    {children}
  </View>
);

Card.Footer = ({ footerText }: { footerText: string }) => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>{footerText}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 10,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    marginBottom: 10,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
    marginTop: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#888',
  },
});


