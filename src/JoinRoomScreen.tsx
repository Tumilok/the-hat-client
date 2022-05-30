import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const JoinRoomScreen = () => {
  const [wordsList, setWordsList] = useState<string[]>([]);
  const [word, setWord] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Join Room</Text>

      <TextInput
        value={word}
        onChangeText={text => setWord(text)}
        style={styles.input}
      />

      <Button
        title="Join Room"
        onPress={() => {
          setWordsList([word, ...wordsList]);
          setWord('');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: { fontSize: 30, marginTop: '1rem', marginBottom: '1rem' },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    padding: '1rem',
    marginBottom: '1rem',
  },
});

export default JoinRoomScreen;
