
import { View, Text, TouchableOpacity, Image, StyleSheet, Platform, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import SearchInput from '@/components/SearchInput';
import Octicons from '@expo/vector-icons/Octicons';
import placeHolderImage from '@/assets/images/image.png';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import ProductCard from '@/components/ProductCard';


const categories = [
    {
        name: "T-Shirts",
        icon: <FontAwesome6 name="shirt" size={24} color="#704f38" />
    },
    {
        name: "Pants",
        icon: <FontAwesome6 name="tshirt" size={24} color="#704f38" />
    },
    {
        name: "Shoes",
        icon: <FontAwesome6 name="shoe-prints" size={24} color="#704f38" />
    },
    {
        name: "Hats",
        icon: <FontAwesome6 name="hat-cowboy" size={24} color="#704f38" />
    },
    {
        name: "Hats",
        icon: <FontAwesome6 name="hat-cowboy" size={24} color="#704f38" />
    },
    {
        name: "Hats",
        icon: <FontAwesome6 name="hat-cowboy" size={24} color="#704f38" />
    },
]

const index = () => {
    return (
        <SafeAreaView className='flex-1 px-4 bg-white'>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* header */}
                <View className='flex-col gap-2 mb-4'>
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
                <View className='mb-4'>
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
                <View className='mb-4'>
                    <View className='flex-row justify-between items-center'>
                        <Text className='text-lg font-medium'>Categories</Text>
                        <TouchableOpacity>
                            <Text className='text-primary text-lg font-medium'>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <View className='flex-row gap-2 mt-4 justify-between'>
                        {categories.map((category, index) => (
                            <View key={index} className='flex-col gap-[2px] items-center' >
                                <View>
                                    <View className='size-16 rounded-full bg-primary/20 flex-row justify-center items-center'>
                                        {category?.icon}
                                    </View>
                                </View>
                                <Text className='text-center text-sm font-medium text-gray-500'>{category?.name}</Text>
                            </View>
                        ))}
                    </View>
                </View>
                <View className='mb-4'>
                    <View className='flex-row justify-between items-center'>
                        <Text className='text-lg font-medium'>Flash Deals</Text>
                        <TouchableOpacity>
                            <Text className='text-primary text-lg font-bold'>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <View className='flex-row gap-2 mt-4 justify-between'>
                        {categories.map((category, index) => (
                            <View key={index} className='flex-col gap-[2px] items-center' >
                                <View>
                                    <View className={`py-2 px-4 rounded-full border-medium-gray border-[0.5px] flex-row justify-center items-center ${index === 0 ? 'bg-primary' : 'bg-white'}`}>
                                        <Text className={`text-sm text-${index === 0 ? 'white' : 'black'}`}>{category.name}</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
                <View className='mb-4'>
                    <View className='flex-row flex-wrap justify-between'>
                        {Array.from({ length: 12 }, (_, i) => ({
                            name: `Product ${i + 1}`,
                            price: `${Math.floor(Math.random() * 100) + 1}.99`,
                            image: `https://picsum.photos/id/${i + 1}/200/300`,
                        })).map((item, index) => (
                            <View key={index} className='w-[48%] mb-4'> 
                                <ProductCard {...item} />
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>

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