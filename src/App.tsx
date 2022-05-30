import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateRoomScreen from './CreateRoomScreen';
import HomeScreen from './HomeScreen';
import JoinRoomScreen from './JoinRoomScreen';

const App = () => {
  type RootStackParamList = {
    Home: undefined;
    CreateRoom: { name: string };
    JoinRoom: { name: string };
  };

  const linking: LinkingOptions<RootStackParamList> = {
    prefixes: [],
    config: {
      screens: {
        Home: '',
        CreateRoom: 'create/:name',
        JoinRoom: 'join/:name',
      },
    },
  };

  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
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
