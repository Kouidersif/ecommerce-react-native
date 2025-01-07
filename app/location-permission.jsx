import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
const LocationPermission = () => {
    const redirectToManualLocation = () => {
        router.push('/location-input')
    }
    return (
        <SafeAreaView className='flex-1 bg-white flex-col items-center justify-center gap-12 px-4'>
            <View className='size-48 bg-[#ededed] rounded-full flex items-center justify-center'>
                <MaterialIcons name="location-on" size={96} color="#704f38" />
            </View>
            <View className='flex-col items-center justify-center'>
                <Text className='text-3xl font-bold text-black mb-2'>What is your location?</Text>
                <Text className='text-lg text-medium-gray text-center'>We need to know your location in order to suggest nearby services</Text>
            </View>

            <View className='flex-col gap-4 w-full'>
                <TouchableOpacity className='bg-primary rounded-full py-4 px-12 w-full'>
                    <Text className='text-white text-center text-xl font-medium'>Allow Location Access</Text>
                </TouchableOpacity>
                <TouchableOpacity className='rounded-full py-4 px-12 w-full' onPress={redirectToManualLocation}>
                    <Text className='text-primary text-center text-xl font-semibold'>Enter Location Manually</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default LocationPermission