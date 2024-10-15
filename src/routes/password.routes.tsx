import { createStackNavigator } from '@react-navigation/stack';

import password from '../pages/password'


const Stack = createStackNavigator();

export default function StackRoutesPassword() {
    return (
    <Stack.Navigator>
      <Stack.Screen name="password" component={password} />
      
    </Stack.Navigator>
  );
}