import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>The Hat</Text>

      <Button
        title="Join Room"
        onPress={() => {
          navigation.navigate('JoinRoom');
        }}
      />
      <Button
        title="Create Room"
        onPress={() => {
          navigation.navigate('CreateRoom');
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

export default HomeScreen;
