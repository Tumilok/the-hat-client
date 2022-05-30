import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  const [name, setName] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>The Hat</Text>

      <Text style={styles.text}>Please enter your name:</Text>

      <TextInput
        value={name}
        onChangeText={text => setName(text)}
        style={styles.input}
      />

      <View style={{ flexDirection: 'row' }}>
        <View style={{ marginRight: '1rem' }}>
          <Button
            title="Join Room"
            onPress={() => {
              if (name) {
                navigation.navigate('JoinRoom', {
                  name: name,
                });
              }
            }}
          />
        </View>
        <View style={{ marginLeft: '1rem' }}></View>
        <Button
          title="Create Room"
          onPress={() => {
            if (name) {
              navigation.navigate('CreateRoom', {
                name: name,
              });
            }
          }}
        />
      </View>
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

export default HomeScreen;
