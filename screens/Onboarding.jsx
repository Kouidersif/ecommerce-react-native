import React from 'react';
import { Image, Text, View } from 'react-native';

const Onboarding = () => {
    return (
        <View className='flex-1 bg-[#f8f8f8] relative pt-14'>
            <View className='w-full flex-row justify-end py-2 px-2'>
                <Text className="text-primary text-lg font-medium">
                    Skip
                </Text>
            </View>
            <View className='w-full h-[550px] px-12'>
                <Image className='w-full h-full' resizeMode='cover' source={{ uri: "https://img.freepik.com/free-photo/still-life-say-no-fast-fashion_23-2149669573.jpg" }} />
            </View>
            <View className='flex-1 shadow-xl bg-white rounded-tl-[20px] rounded-tr-[20px] py-12'>
                <View className='flex-col gap-4 py-2 px-4'>
                    <Text className='text-3xl font-bold text-center'>The <Text className='text-primary'>Fashion App</Text> That Makes You Stand Out</Text>
                    <Text className='text-lg text-gray-500 text-center'>Discover the latest trends and elevate your style with our curated selection of fashion essentials.</Text>
                </View>
            </View>
        </View>

    );
};

export default Onboarding;