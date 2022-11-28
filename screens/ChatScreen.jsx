import { View, Text, StyleSheet, SafeAreaView, Button } from "react-native";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const ChatScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Chat",
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

export default ChatScreen;
