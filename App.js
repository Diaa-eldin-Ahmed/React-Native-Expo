import React from "react";
import Home from "./screens/Home";
import Register from "./screens/Register";
import SignIn from "./screens/SignIn";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import ToDo from "./screens/ToDo";

export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <StatusBar style="light" />
            <Stack.Navigator>
                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ToDo"
                    component={ToDo}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
