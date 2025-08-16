import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.header}>Welcome, Student!</Text>
    <Text>Your Study Preferences: 📚 Notes + 🧪 Labs</Text>
    <Text>Recent Pages:</Text>
    <Text>• Bio Final Notes</Text>
    <Text>• Team Meeting – Aug 14</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
});

export default HomeScreen;
