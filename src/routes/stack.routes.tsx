import { createStackNavigator } from '@react-navigation/stack';

import Register from '../pages/register';


const Stack = createStackNavigator();

export default function StackRoutes() {
    return (
    <Stack.Navigator>
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}