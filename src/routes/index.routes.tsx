import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/login";
import BottomRoutes from "./bottom.routes";
import Register from "../pages/register";
import Password from "../pages/password";
import UserPassword from "../pages/userpassword";


export default function Routes() {
    const Stack = createStackNavigator()
    
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
                // cardStyle: {
                //     // backgroundColor: "#fff",
                // }
            }}
        >
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="BottomRoutes"
                component={BottomRoutes}
            />   
            <Stack.Screen
                name="Register"
                component={Register}
            /> 
            <Stack.Screen
                name="Password"
                component={Password}
            />
            <Stack.Screen
                name="UserPassword"
                component={UserPassword}
            />
            

            



        </Stack.Navigator>
    )
}