import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const JoinRoomScreen = ({ route }: any) => {
  const [roomKey, setRoomKey] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Join Room</Text>

      <Text style={styles.text}>
        Hi {route.params.name}, please provide the game unique code
      </Text>
      <TextInput
        value={roomKey}
        onChangeText={text => setRoomKey(text)}
        style={styles.input}
      />
      <Button
        title="Join Room"
        onPress={() => {
          console.log(route);
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
  text: { fontSize: 20, marginBottom: '1rem' },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    padding: '1rem',
    marginBottom: '1rem',
  },
});

export default JoinRoomScreen;
