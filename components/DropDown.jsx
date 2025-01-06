import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';

const DropDown = ({ options, selected, onSelect }) => {
    const [isOpen, setIsOpen] = React.useState(false)

    const handleSelect = (option) => {
        onSelect(option)
        setIsOpen(false)
    }

    return (
        <View className="relative w-full border border-gray-300 rounded-full px-4 py-4">
            <View className='relative'>
                <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
                    <View className="flex-row items-center justify-between rounded-lg">
                        <Text className="text-black text-base">{selected?.label}</Text>
                        <Entypo name="chevron-down" size={18} color="black" />
                    </View>
                </TouchableOpacity>
                {isOpen && (
                    <View className="absolute top-10 left-0 w-full rounded-lg p-2 z-10 bg-white border border-gray-300 border-t-0">
                        {options.map((option) => (
                            <TouchableOpacity
                                key={option.value}
                                onPress={() => handleSelect(option)}
                                className="p-3"
                            >
                                <Text className="text-black text-base">{option.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
            </View>
        </View>
    )
}

export default DropDown

