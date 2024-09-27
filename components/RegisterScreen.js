// src/screens/RegisterScreen.js
import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const RegisterScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Create Account</Text>
    <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#aaa" />
    <TextInput style={styles.input} placeholder="Password" secureTextEntry placeholderTextColor="#aaa" />
    <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry placeholderTextColor="#aaa" />
    <TouchableOpacity style={styles.button} onPress={() => alert('Account Created')}>
      <Text style={styles.buttonText}>Sign up</Text>
    </TouchableOpacity>
    <Text style={styles.link}>Already have an account?</Text>
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

export default RegisterScreen;
