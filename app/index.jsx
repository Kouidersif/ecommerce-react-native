
import { View, Text, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import SearchInput from '@/components/SearchInput';
import Octicons from '@expo/vector-icons/Octicons';
import placeHolderImage from '@/assets/images/image.png';


const index = () => {
    return (
        <SafeAreaView className='flex-1 px-4 bg-white flex-col gap-6'>
            {/* header */}
            <View className='flex-col gap-2'>
                <View className='flex-row items-center justify-between py-4'>
                    <View className='flex-col gap-2'>
                        <Text>Location</Text>
                        <View className='flex-row items-end'>
                            <MaterialIcons name="location-on" size={24} color="#704f38" />
                            <Text className='text-lg font-medium'>San Francisco, CA</Text>
                        </View>
                    </View>
                    <View className='rounded-full p-2 bg-[#f1f1f1]'>
                        <FontAwesome name="bell" size={24} color="black" />
                    </View>
                </View>
                <View className='flex-row gap-2 items-center'>
                    <SearchInput className='flex-1' placeHolder='Search' />
                    <TouchableOpacity className='bg-primary rounded-full p-4'>
                        <Octicons name="filter" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Banner */}
            <View>
                <View className='bg-[#eee5db] rounded-xl h-56 p-8 flex-row overflow-hidden'>
                    <View className='flex-col gap-2'>
                        <Text className='text-3xl font-bold'>
                            New Collection
                        </Text>
                        <View>
                            <Text className='text-lg text-medium-gray'>
                                Discount 50% for
                            </Text>
                            <Text className='text-lg text-medium-gray'>
                                the first transaction
                            </Text>
                        </View>
                        <TouchableOpacity style={styles.shadow} className='bg-primary rounded-xl self-start py-2 px-4 mt-auto'>
                            <Text className='text-white text-center text-lg font-medium'>Shop Now</Text>
                        </TouchableOpacity>
                    </View>

                    <View className='flex-1 h-48'>
                        <Image source={placeHolderImage} className='size-full' resizeMode='cover' />
                    </View>
                </View>
                <View className='flex-row justify-center my-4'>
                    {/* dots simulate slides */}
                    <View className='flex-row gap-2'>
                        <View className='w-2 h-2 bg-primary rounded-full'></View>
                        <View className='w-2 h-2 bg-gray-300 rounded-full'></View>
                        <View className='w-2 h-2 bg-gray-300 rounded-full'></View>
                        <View className='w-2 h-2 bg-gray-300 rounded-full'></View>
                        <View className='w-2 h-2 bg-gray-300 rounded-full'></View>
                    </View>
                </View>
            </View>
            {/* Categories filter */}
            <View>
                <View className='flex-row justify-between items-center'>
                    <Text className='text-lg font-bold'>Categories</Text>
                    <TouchableOpacity>
                        <Text className='text-primary text-lg font-bold'>See All</Text>
                    </TouchableOpacity>
                </View>
                <View className='flex-row gap-2 mt-4'>    
                    {['Clothing', 'Shoes', 'Accessories', 'Electronics'].map((category) => (
                        <View key={category} className='flex-col gap-[2px] items-center'>
                            <Image source={placeHolderImage} className='size-12 rounded-full' resizeMode='cover' />
                            <Text className='text-center text-sm font-medium text-gray-500'>{category}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    shadow: Platform.select({
        ios: {
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.50,
            shadowRadius: 3.84,
        },
        android: {
            elevation: 5,
        },
    }),
})

export default index