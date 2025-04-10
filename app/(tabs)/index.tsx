import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { setBackgroundColorAsync } from 'expo-system-ui';
import { useEffect } from 'react';
import { Image, ScrollView, StatusBar, View } from "react-native";

export default function Index() {
    useEffect(() => {
        // Set navigation bar color to transparent
        setBackgroundColorAsync('transparent');
    }, []);

    return (
        <View className="flex-1 bg-primary">
            <Image source={images.bg} className="absolute w-full z-0" />
            <StatusBar translucent backgroundColor="transparent" />

            <ScrollView className="flex-1  px-5 ">
                <Image  source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto"/>

            </ScrollView>
        </View>
    );
}
