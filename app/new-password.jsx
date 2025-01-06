import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign'

const NewPassword = () => {
    return (
        <SafeAreaView className='flex-1 py-24 bg-white px-4 flex-col gap-8'>
            <View>
                <Text className='text-center mb-4 text-3xl font-medium'>New Password</Text>
                <Text className='text-center text-medium-gray'>
                    Create a new password to access exclusive deals and explore the latest trends in fashion.
                </Text>
            </View>
            <View className='flex-col gap-8'>
                {/* Form */}
                <View>
                    <View className='flex-col gap-2 mb-4'>
                        <Text>
                            Password
                        </Text>
                        <View className='flex-row justify-between items-center border border-gray-300 rounded-full px-4 py-4'>
                            <TextInput
                                placeholder='Enter your password'
                                className=''
                            />
                            <AntDesign name="eyeo" size={24} color="black" />
                        </View>
                    </View>
                    <View className='flex-col gap-2'>
                        <Text>
                            Confirm Password
                        </Text>
                        <View className='flex-row justify-between items-center border border-gray-300 rounded-full px-4 py-4'>
                            <TextInput
                                placeholder='Confirm your password'
                                className=''
                            />
                            <AntDesign name="eyeo" size={24} color="black" />
                        </View>
                    </View>
                </View>

                {/* Button */}
                <TouchableOpacity className='bg-primary rounded-full py-4'>
                    <Text className='text-center text-white font-medium'>Create New Password</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NewPassword