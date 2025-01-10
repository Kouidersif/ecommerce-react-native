import { View, Text, TextInput, Platform } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign'

const SearchInput = (props) => {
    const { className, placeHolder } = props
    const paddingY = Platform.OS === 'ios' ? "py-4" : "py-2"
    return (
        <View className={`flex-row gap-2 items-center border border-gray-300 rounded-full px-4 ${paddingY} ${className}`}>
            <AntDesign name="search1" size={20} color="black" />
            <TextInput
                placeholder={placeHolder}
                className=''
            />
        </View>
    )
}

export default SearchInput