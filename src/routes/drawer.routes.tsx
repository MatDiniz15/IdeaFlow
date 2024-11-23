import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";

import BottomRoutes from "./bottom.routes";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="home"
                component={BottomRoutes}
                options={{
                    drawerIcon: ({color, size}) => <Feather name='home' color={color} size={size} />,
                    drawerLabel: 'Inicio'
                }}
            
            />           
        </Drawer.Navigator>
    )
}