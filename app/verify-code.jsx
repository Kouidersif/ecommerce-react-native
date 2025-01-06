import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { OtpInput } from "react-native-otp-entry";

const OtpVerify = () => {
    return (
        <SafeAreaView className='flex-1 py-24 bg-white px-4 flex-col gap-8'>
            <View>
                <Text className='text-center mb-4 text-3xl font-medium'>Verify Code</Text>
                <Text className='text-center text-medium-gray'>
                    Enter the verification code sent to your email <Text className='text-primary font-semibold'>j.doe@ex.com</Text>
                </Text>
            </View>
            <OtpInput
                numberOfDigits={4}
                focusColor="#7d7d7d"
                autoFocus={false}
                hideStick={true}
                placeholder="-"
                blurOnFilled={true}
                disabled={false}
                type="numeric"
                secureTextEntry={false}
                focusStickBlinkingDuration={500}
                onFocus={() => console.log("Focused")}
                onBlur={() => console.log("Blurred")}
                onTextChange={(text) => console.log(text)}
                onFilled={(text) => console.log(`OTP is ${text}`)}
                textInputProps={{
                    accessibilityLabel: "One-Time Password",
                }}
                theme={
                    {
                        pinCodeContainerStyle: {
                            width: 80,
                            height: 60,
                            borderRadius: 999,
                            borderWidth: 0.5,
                            borderColor: "#7d7d7d",
                            backgroundColor: "#fff",
                        },
                    }
                }
            />
            <View>
                <TouchableOpacity className='w-full h-16 bg-primary rounded-full flex-row justify-center items-center'>
                    <Text className='text-white text-lg font-bold'>Verify</Text>
                </TouchableOpacity>
                <Text className='text-center mt-4'>
                    <Text className='text-gray-500'>Didn't receive the code? </Text>
                    <Text className='text-primary'>Resend</Text>
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default OtpVerify