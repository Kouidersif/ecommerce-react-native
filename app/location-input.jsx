import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
const LocationInput = () => {
    return (
        <SafeAreaView className='flex-1 bg-white px-4'>
            <View className='flex-row items-center justify-between py-4'>
                <TouchableOpacity className='border border-gray-300 rounded-full p-2'>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <Text className='text-2xl font-normal mx-auto'>Enter Your Location</Text>
            </View>
            <View className='flex-col gap-6'>
                <View className='flex-row gap-2 items-center border border-gray-300 rounded-full px-4 py-4'>
                    <AntDesign name="search1" size={20} color="black" />
                    <TextInput
                        placeholder='Enter your location'
                        className=''
                    />
                </View>
                <View className='pb-4 border-b border-gray-300'>
                    <TouchableOpacity className='flex-row gap-4 items-center'>
                        <FontAwesome5 name="location-arrow" size={24} color="#704f38" />
                        <Text className='text-lg'>
                            Use Current Location
                        </Text>
                    </TouchableOpacity>
                </View>

                <Text className='text-2xl font-semibold'>Search Results</Text>
                <View className='flex-col gap-4'>
                    <TouchableOpacity className='flex-row gap-4 items-center pb-4 border-b-[0.5px]'>
                        <FontAwesome5 name="location-arrow" size={15} color="#704f38" />
                        <Text className='text-lg text-medium-gray'>
                            123 Main St, Anytown, USA
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='flex-row gap-4 items-center pb-4 border-b-[0.5px]'>
                        <FontAwesome5 name="location-arrow" size={15} color="#704f38" />
                        <Text className='text-lg text-medium-gray'>
                            456 Second St, Anytown, USA
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='flex-row gap-4 items-center pb-4 border-b-[0.5px]'>
                        <FontAwesome5 name="location-arrow" size={15} color="#704f38" />
                        <Text className='text-lg text-medium-gray'>
                            789 Third St, Anytown, USA
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LocationInput