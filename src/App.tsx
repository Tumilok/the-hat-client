import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateRoomScreen from './CreateRoomScreen';
import HomeScreen from './HomeScreen';
import JoinRoomScreen from './JoinRoomScreen';

const App = () => {
  type RootStackParamList = {
    Home: undefined;
    CreateRoom: undefined;
    JoinRoom: undefined;
  };

  const linking: LinkingOptions<RootStackParamList> = {
    prefixes: [],
    config: {
      screens: {
        Home: '',
        CreateRoom: 'create',
        JoinRoom: 'join',
      },
    },
  };

  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="CreateRoom"
          component={CreateRoomScreen}
          options={{ title: 'Create Room' }}
        />
        <Stack.Screen
          name="JoinRoom"
          component={JoinRoomScreen}
          options={{ title: 'Join Room' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
