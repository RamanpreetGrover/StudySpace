import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';

const PageEditorScreen = () => {
  const [blocks, setBlocks] = useState([
    { id: 1, type: 'header', content: 'Study Notes' },
    { id: 2, type: 'text', content: '• Read Chapter 1\n• Review lab manual' },
  ]);

  return (
    <View style={styles.container}>
      {blocks.map((block) => (
        <View key={block.id} style={styles.block}>
          <Text style={block.type === 'header' ? styles.header : styles.text}>
            {block.content}
          </Text>
        </View>
      ))}
      <Button title="Add Block" onPress={() =>
        setBlocks([...blocks, { id: Date.now(), type: 'text', content: 'New block...' }])
      } />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  block: { marginBottom: 15 },
  header: { fontSize: 22, fontWeight: 'bold' },
  text: { fontSize: 16 },
});

export default PageEditorScreen;
