import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
    return (
        <View
            className={"flex-1 items-center justify-center"}>

            <Text className={"text-5xl text-dark-200 font-bold"}>Welcome</Text>
            <Link href={"/onboarding"}>
                <Text className={"text-2xl text-dark-100 font-bold"}>Get Started</Text> 
            </Link>

        </View>
    );
}
