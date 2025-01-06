import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const SignIn = () => {
    return (
        <SafeAreaView className='flex-1 py-24 bg-white px-4 flex-col gap-8'>
            <View>
                <Text className='text-center mb-4 text-3xl font-medium'>Sign In</Text>
                <Text className='text-center text-medium-gray'>
                    Sign in now to access exclusive deals and explore the latest trends in fashion.
                </Text>
            </View>
            <View className='flex-col gap-8'>
                {/* Form */}
                <View>
                    <View className='flex-col gap-2 mb-4'>
                        <Text>
                            Email
                        </Text>
                        <TextInput
                            placeholder='Enter your email'
                            className='border border-gray-300 rounded-full px-4 py-4'
                        />
                    </View>
                    <View className='flex-col gap-2'>
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
                </View>
                <View className='flex-row justify-end'>
                    <Text className='text-primary underline font-medium'>Forgot Password?</Text>
                </View>
                <View>
                    <TouchableOpacity className='w-full h-16 bg-primary rounded-full flex-row justify-center items-center'>
                        <Text className='text-white text-lg font-medium'>Sign In</Text>
                    </TouchableOpacity>
                </View>
                <View className='flex-row items-center justify-between'>
                    <View className='h-[1px] w-1/3 bg-medium-gray' />
                    <Text className='text-medium-gray'>
                        Or sign in with
                    </Text>
                    <View className='h-[1px] w-1/3 bg-medium-gray' />
                </View>
                <View className='flex-row justify-center gap-4'>
                    <TouchableOpacity className='w-16 h-16 border border-gray-300 rounded-full flex-row justify-center items-center'>
                        <AntDesign name="apple1" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity className='w-16 h-16 border border-gray-300 rounded-full flex-row justify-center items-center'>
                        <AntDesign name="google" size={24} color="red" />
                    </TouchableOpacity>
                    <TouchableOpacity className='w-16 h-16 border border-gray-300 rounded-full flex-row justify-center items-center'>
                        <FontAwesome5 name="facebook-f" size={24} color="blue" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text className='text-center'>
                        Don't have an account? <Text className='text-primary underline font-medium'>Sign Up</Text>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SignIn