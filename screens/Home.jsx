import { View, Text, StyleSheet, SafeAreaView, Button } from "react-native";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const navigation = useNavigation();
  const { user } = useAuth();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={s.container}>
      <Text className="text-red-500 ">Hello, {user}</Text>
      <Button title="Chat" onPress={() => navigation.navigate("ChatScreen")} />
      <Button
        title="Login"
        onPress={() => navigation.navigate("LoginScreen")}
      />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
