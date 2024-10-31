import { createStackNavigator } from '@react-navigation/stack';

import userpassword from '../pages/userpassword'


const Stack = createStackNavigator();

export default function StackRoutesUserpassword() {
    return (
    <Stack.Navigator>
      <Stack.Screen name="userpassword" component={userpassword} />
            
    </Stack.Navigator>
  );
}