import { icons } from '@/constants/icons'
import React from 'react'
import { Image, TextInput, View } from 'react-native'

const SearchBar = () => {
    return (
        <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-3'>
            <Image source={icons.search} className='size-5' resizeMode='contain' tintColor="#ab8bff" />
            <TextInput
            onPress={() => {}}
            placeholder='Search'
            onChangeText={() => {}}
            placeholderTextColor="#ab8bff"
            className='flex-1 ml-3 text-white'
            value=''
            />
        </View>
    )
}

export default SearchBar  