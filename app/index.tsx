import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
     className={"flex-1 items-center justify-center"}>

      <Text className={"text-5xl text-blue-800 font-bold"}>Welcome to our movie app.</Text>
      <Text className={"text-4xl text-blue-800 font-semibold  "}>1st Movie.</Text>
    </View>
  );
}
