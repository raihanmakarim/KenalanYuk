import { View, Text, StyleSheet, SafeAreaView, Button } from "react-native";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../hooks/useAuth";

const LoginScreen = () => {
  const navigation = useNavigation();
  const user = useAuth();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Login",
    });
  }, [navigation]);

  return (
    <SafeAreaView style={s.container}>
      <Text>chat Screen</Text>
      <Button title="click me " />
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoginScreen;
