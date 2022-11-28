import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, ChatScreen, LoginScreen } from "./screens";
import useAuth from "./hooks/useAuth";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const { user } = useAuth();
  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ChatScreen" component={ChatScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </>
      ) : (
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
}
