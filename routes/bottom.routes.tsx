import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from "@expo/vector-icons";

import List from '../pages/list';
import User from '../pages/user';

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
        <Tab.Screen 
            name="List" 
            component={List} 
            options={{
                tabBarIcon: ({color, size}) => <Feather name='home' color={color} size={size}/>,
                tabBarLabel: 'List'
            }}
        />
        <Tab.Screen 
            name="User" 
            component={User} 
            options={{
                tabBarIcon: ({color, size}) => <Feather name='plus' color={color} size={size}/>,
                tabBarLabel: 'User'

            }}
        />
    </Tab.Navigator>
  );
}

