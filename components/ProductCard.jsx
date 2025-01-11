import { View, Text, Image } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
// ProductCard Component
const ProductCard = ({ name, price, image }) => {
    return (
        <View className='flex-col gap-2'>
            <View className='aspect-square rounded-xl'> 
                <Image
                    className='w-full h-full rounded-xl'
                    source={{ uri: image }}
                    resizeMode="cover"
                />
            </View>
            <View>
                <View className='flex-row items-center justify-between'>
                    <Text className='text-lg font-normal'>{name}</Text>
                    <AntDesign name="star" size={24} color="#facc15" />
                </View>
                <Text className='text-lg font-semibold'>{price}</Text>
            </View>
        </View>
    )
}
export default ProductCard