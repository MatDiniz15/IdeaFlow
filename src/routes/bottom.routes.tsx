import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from "@expo/vector-icons";
import List from '../pages/list';
import User from '../pages/user';
import CustomTabBar from '../components/CustomTabBar';
import { AuthProviderList } from '../context/authContext_list';

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (
    <AuthProviderList>
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            tabBar={pros=><CustomTabBar {...pros}/>}
        >
            <Tab.Screen 
                name="List" 
                component={List} 
                options={{
                    tabBarIcon: ({color, size}) => <Feather name='home' color={color} size={size}/>,
                    tabBarLabel: 'List'
                }}
            />
        </Tab.Navigator>
    </AuthProviderList>
  );
}

