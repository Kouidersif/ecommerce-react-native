import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import DropDown from '@/components/DropDown';
const ProfileSetup = () => {
    return (
        <SafeAreaView className='flex-1 py-24 bg-white px-4 flex-col gap-8'>
            <View>
                <Text className='text-center mb-4 text-3xl font-medium'>Complete Your Profile</Text>
                <Text className='text-center text-medium-gray'>
                    Complete your profile to access exclusive deals and explore the latest trends in fashion.
                </Text>
            </View>
            <View className='flex-row justify-center'>
                <View className='size-40 relative'>
                    <Image resizeMode='cover' className='w-full h-full rounded-full border-2 border-gray-200' source={{ uri: "https://forum.truckersmp.com/uploads/monthly_2020_07/imported-photo-107120.thumb.png.d1f02d2b817e39658ceac7f3ab34f752.png" }} />
                    <Feather name="edit-3"
                        size={20} color="white"
                        className='absolute bottom-1 right-2 border-white border-2 bg-primary p-2 rounded-full' />
                </View>
            </View>
            <View>
                {/* Form */}
                <View>
                    <View className='flex-col gap-2 mb-4'>
                        <Text>
                            Full Name
                        </Text>
                        <TextInput
                            placeholder='Enter your full name'
                            className='border border-gray-300 rounded-full px-4 py-4'
                        />
                    </View>
                    <View className='flex-col gap-2 mb-4'>
                        <Text>
                            Phone Number
                        </Text>
                        <TextInput
                            placeholder='Enter your phone number'
                            className='border border-gray-300 rounded-full px-4 py-4'
                        />
                    </View>
                    <View className='flex-col gap-2 mb-4'>
                        <Text>
                            Gender
                        </Text>
                        <DropDown
                            options={[
                                { label: 'Male', value: 'male' },
                                { label: 'Female', value: 'female' },
                                { label: 'Other', value: 'other' },
                            ]}
                            selected={{ label: 'Select Gender', value: '' }}
                        />
                    </View>
                </View>
                <View>
                    <TouchableOpacity className='w-full h-16 bg-primary rounded-full flex-row justify-center items-center mt-2'>
                        <Text className='text-white text-lg font-medium'>Complete Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView >
    )
}

export default ProfileSetup