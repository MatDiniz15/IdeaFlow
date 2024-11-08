import { createStackNavigator } from '@react-navigation/stack';

import addNote from '../pages/addNote'


const Stack = createStackNavigator();

export default function StackRoutesaddNote() {
 
    return (
    <Stack.Navigator>
      <Stack.Screen name="addNote" component={addNote}/>
            
    </Stack.Navigator>
  );
}