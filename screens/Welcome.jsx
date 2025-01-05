import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Welcome = () => {
    return (
        <SafeAreaView className='flex-1 bg-white flex-col px-4 gap-8'>
            <View className='w-full h-[550px] flex-row gap-4 py-2'>
                <View className='w-1/2 h-full'> 
                    <Image className='w-full h-full rounded-full' resizeMode='cover' source={{ uri: "https://img.freepik.com/free-photo/still-life-say-no-fast-fashion_23-2149669576.jpg" }} />
                </View>
                <View className='flex-1 h-full flex-col gap-1 items-center'>
                    <Image className='w-full h-2/3 rounded-full' resizeMode='cover' source={{ uri: "https://img.freepik.com/free-photo/still-life-say-no-fast-fashion_23-2149669581.jpg" }} />
                    <Image className='w-48 h-48 rounded-full' resizeMode='cover' source={{ uri: "https://img.freepik.com/free-photo/still-life-say-no-fast-fashion_23-2149669573.jpg" }} />
                </View>
            </View>
            <View className='flex-col gap-4 py-2'>
                <Text className='text-3xl font-bold text-center'>The <Text className='text-primary'>Fashion App</Text> That Makes You Stand Out</Text>
                <Text className='text-lg text-gray-500 text-center'>Discover the latest trends and elevate your style with our curated selection of fashion essentials.</Text>
            </View>
            <View>
                <TouchableOpacity className='w-full h-16 bg-primary rounded-full flex-row justify-center items-center'>
                    <Text className='text-white text-lg font-bold'>Get Started</Text>
                </TouchableOpacity>
                <Text className='text-center mt-4'>
                    <Text className='text-gray-500'>Already have an account? </Text>
                    <Text className='text-primary'>Login</Text>
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default Welcome

