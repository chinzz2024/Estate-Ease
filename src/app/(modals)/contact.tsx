
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { sampleProperties } from '../../data/properties';

export default function ContactModal() {
    const router = useRouter();
    const property = sampleProperties[0];

    return (
        <SafeAreaView className="flex-1 bg-white" >
            <ScrollView contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 24, paddingBottom: 40 }}>
                
            
                <Text style={{ fontFamily: 'Manrope-ExtraBold' }} className="text-2xl text-black">Contact Agent</Text>
                <View className="flex-row items-center mt-1">
                    <Ionicons name="location-sharp" size={16} color="gray" />
                    <Text style={{ fontFamily: 'Manrope-Bold' }} className="text-sm text-gray-500 ml-1">{property.location}</Text>
                </View>
                
            
                <View className="flex-row justify-between items-end mt-6">
                    <View className="flex-1">
                        
                        <Text style={{ fontFamily: 'Manrope-ExtraBold' }} className="text-3xl text-black" numberOfLines={2}>{property.title}</Text>
                        <Text style={{ fontFamily: 'Manrope-Bold' }} className="text-sm text-gray-500 mt-1">{property.baths} Baths • {property.beds} Beds • {property.sqft} sqft</Text>
                    </View>
                    <View className="items-end">
                        <Text style={{ fontFamily: 'Manrope-ExtraBold' }} className="text-2xl text-black">${property.price.toLocaleString()}</Text>
                        <Text style={{ fontFamily: 'Manrope-Bold' }} className="text-gray-500 -mt-1">/month</Text>
                    </View>
                </View>
                
            
                                <View className="space-y-4 mt-8">
                    <View className="flex-row space-x-4">
                        <TextInput placeholder="First Name" className="flex-1 bg-gray-100 p-4 rounded-lg border border-gray-200" />
                        <TextInput placeholder="Sec Name" className="flex-1 bg-gray-100 p-4 rounded-lg border border-gray-200" />
                    </View>
                    <TextInput placeholder="You Phone Number" keyboardType='phone-pad' className="bg-gray-100 p-4 rounded-lg border border-gray-200" />
                    <TextInput placeholder="You Email" keyboardType='email-address' className="bg-gray-100 p-4 rounded-lg border border-gray-200" />
                    <TextInput
                        placeholder="Message"
                        multiline
                        numberOfLines={4}
                        className="bg-gray-100 p-4 rounded-lg border border-gray-200 h-28"
                        textAlignVertical='top'
                    />
                </View>

                <TouchableOpacity className="bg-[#A3F596] py-4 rounded-2xl mt-8">
                    <Text style={{ fontFamily: 'Manrope-Bold' }} className="text-center text-black font-semibold text-base">Send Inquiry</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}