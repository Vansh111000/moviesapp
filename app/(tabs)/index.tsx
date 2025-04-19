import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import { setBackgroundColorAsync } from 'expo-system-ui';
import { useEffect } from 'react';
import { Image, ScrollView, StatusBar, View } from "react-native";
import SearchBar from "../../components/SearchBar";

export default function Index() {
    const route = useRouter();
    useEffect(() => {
        // Set navigation bar color to transparent
        setBackgroundColorAsync('transparent');
    }, []);

    return (
        <View className="flex-1 bg-primary">
            <Image source={images.bg} className="absolute w-full z-0" />
            <StatusBar translucent backgroundColor="transparent" />

            <ScrollView className="flex-1  px-5 "
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    minHeight: '100%', paddingBottom: 10,
                }}
            >
                <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
                <View className="flex-1 mt-5">
                <SearchBar 
                onPress={() => route.push('/search')}
                placeholder='Search for movies, series1223 ,cartin1234 and more.....'
                />
                </View>

                <View>
                    <View>
                        <View>
                            
                        </View>
                    </View>
                </View>
                
            </ScrollView>
        </View>
    );
}
