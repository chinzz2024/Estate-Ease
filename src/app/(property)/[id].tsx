
import { Ionicons } from '@expo/vector-icons';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { sampleProperties } from '../../data/properties';

const { width } = Dimensions.get('window');
const HEADER_HEIGHT = 300;

export default function PropertyDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const property = sampleProperties.find((p) => p.id === id);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const [activeTab, setActiveTab] = useState('Overview');
  const tabs = ['Overview', 'Features', 'Reviews', 'Directions'];

  const onImageScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setActiveImageIndex(index);
  };

  if (!property) {
    return <View className="flex-1 items-center justify-center"><Text>Property not found.</Text></View>;
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex-1 bg-white">
        <ScrollView scrollEventThrottle={16} contentContainerStyle={{ paddingBottom: 120 }}>
          
          <View style={{ height: HEADER_HEIGHT }}>
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={onImageScroll}
              scrollEventThrottle={16}
            >
              {property.images.map((imgUrl, index) => (
                <Image
                  key={index}
                  source={{ uri: imgUrl }}
                  style={{ width: width, height: HEADER_HEIGHT }}
                />
              ))}
            </ScrollView>
            
            <View className="absolute bottom-4 w-full flex-row justify-center items-center">
              {property.images.map((_, index) => (
                <View
                  key={index}
                  className={`h-2 w-2 rounded-full mx-1 ${
                    activeImageIndex === index ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </View>
          </View>
          
          
          <SafeAreaView edges={['top']} className="absolute top-0 left-0 right-0 flex-row justify-between items-center p-4">
            <TouchableOpacity onPress={() => router.back()} className="bg-white/80 p-2 rounded-full">
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            
          </SafeAreaView>

          <View className="p-6 bg-white rounded-t-3xl -mt-6">
            <View className="flex-row justify-between items-center">
                <View className="flex-row items-center gap-1">
                    <Ionicons name="location-sharp" size={16} color="gray" />
                    <Text className="text-gray-600">{property.location}</Text>
                </View>
                <View className="flex-row items-center bg-yellow-100 px-3 py-1 rounded-full">
                    <Ionicons name="star" size={14} color="#FFC700" />
                    <Text className="text-gray-800 font-bold ml-1">{property.rating}</Text>
                </View>
            </View>

            <Text className="text-3xl font-bold my-2">{property.title}</Text>
            <Text className="text-gray-500">{property.beds} Beds • {property.baths} Baths • {property.sqft} sqft</Text>

            <View className="my-6">
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 16 }}>
                {tabs.map(tab => (
                  <TouchableOpacity 
                    key={tab} 
                    onPress={() => setActiveTab(tab)} 
                    className={`px-4 py-2 rounded-full ${activeTab === tab ? 'bg-[#A3F596]' : 'bg-gray-100'}`}
                  >
                    <Text className={`font-semibold ${activeTab === tab ? 'text-black' : 'text-gray-500'}`}>{tab}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            {activeTab === 'Overview' && (
              <View>
                <Text className="text-xl font-bold mb-2">Property Details</Text>
                <Text className="text-gray-600 leading-6">{property.description}</Text>
              </View>
            )}
          </View>
        </ScrollView>
        <View className='absolute bottom-12 left-0 right-0 p-4'>
            <View className="p-4 bg-black flex-row justify-between items-center rounded-3xl">
              <View>
                <Text className="text-gray-400">Rent</Text>
                <Text className="text-2xl font-bold text-white">${property.price.toLocaleString()}<Text className="text-base font-normal text-gray-400"> /Month</Text></Text>
              </View>
              <TouchableOpacity onPress={() => router.push('/(modals)/contact')} className="bg-[#A3F596] px-6 py-4 rounded-full flex-row items-center">
                <Ionicons name="call-outline" size={18} color="black" style={{ marginRight: 6 }} />
                <Text className="text-black font-bold text-base">Contact Agent</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    </>
  );
}