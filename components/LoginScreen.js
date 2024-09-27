// src/screens/LoginScreen.js
import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Login</Text>
    <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#aaa" />
    <TextInput style={styles.input} placeholder="Password" secureTextEntry placeholderTextColor="#aaa" />
    <TouchableOpacity style={styles.button} onPress={() => alert('Login')}>
      <Text style={styles.buttonText}>Sign in</Text>
    </TouchableOpacity>
    <Text style={styles.link}>Forgot your password?</Text>
    <Text style={styles.link}>Create new account</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  link: {
    marginTop: 15,
    color: '#007bff',
  },
});

export default LoginScreen;
