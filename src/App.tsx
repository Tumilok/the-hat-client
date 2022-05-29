import { useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App() {
  const [wordsList, setWordsList] = useState<string[]>([]);
  const [word, setWord] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>The Hat</Text>

      <TextInput
        value={word}
        onChangeText={text => setWord(text)}
        style={styles.input}
      />

      <Button
        title="Submit"
        onPress={() => {
          setWordsList([word, ...wordsList]);
          setWord('');
        }}
      />
      <Button title="Clear" onPress={() => setWordsList([])} />

      {wordsList && (
        <FlatList
          data={wordsList}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <View>
              <Text>{item}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

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
