
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';
import logo from '../../assets/images/logo.png';
import { Property, sampleProperties } from '../../data/properties';

const filters = ['All', 'Apartments', 'House', 'Villa', 'Hotel'];


const AppLogo = () => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }} className='relative'>
        <Text className='text-3xl font-normal'>
            Estate
        </Text>
        <View>
            <View className='absolute -top-7 left-5'>
                <Image
                  source={logo}
                  className="size-12"
                />
            </View>
            <Text className='text-3xl font-bold'>
                Ease
            </Text>
        </View>
    </View>
);


const NotificationBell = () => (
    <TouchableOpacity>
        <View className="w-10 h-10 rounded-full bg-white justify-center items-center shadow-sm">
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <Path d="M17.808 15.936c-1.07-1.344-1.608-2.928-1.608-4.5V9.168a4.2 4.2 0 00-4.2-4.2 4.2 4.2 0 00-4.2 4.2v2.268c0 1.572-.534 3.156-1.608 4.5a1.8 1.8 0 001.5 2.964h8.616a1.8 1.8 0 001.5-2.964z" fill="#000" />
                <Path d="M10.2 19.8a1.8 1.8 0 003.6 0" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
            </Svg>
        </View>
    </TouchableOpacity>
);

const PropertyCard = ({ property }: { property: Property }) => {
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => router.push(`/(property)/${property.id}`)}
      className="bg-white rounded-2xl shadow-sm mb-6"
    >
      <View>
        <Image
          source={{ uri: property.image }}
          className="w-full h-52 rounded-t-2xl"
        />
        <View className="absolute top-4 w-full flex-row justify-between px-4">
            <View className="bg-black/60 px-3 flex justify-center items-center rounded-full">
                <Text className="text-white text-xs font-semibold">{property.type}</Text>
            </View>
            <TouchableOpacity
              onPress={() => setIsLiked(!isLiked)}
              className="bg-white/90 w-8 h-8 rounded-full justify-center items-center"
            >
              <Ionicons
                name={isLiked ? "heart" : "heart-outline"}
                size={20}
                color={isLiked ? "#ef4444" : "#000"}
              />
            </TouchableOpacity>
        </View>
      </View>
      
      <View className="p-4">
        <View className="flex-row justify-between items-start">
            <View className="flex-1 pr-2">
                 <Text className="text-sm text-gray-500">{property.beds} Beds • {property.baths} Baths • {property.sqft} sqft</Text>
                 <Text className="text-xl font-bold text-gray-800 my-1" numberOfLines={1}>{property.title}</Text>
                 <View className="flex-row items-center">
                    <Ionicons name="location-sharp" size={16} color="gray" />
                    <Text className="text-gray-600 text-sm ml-1">{property.location}</Text>
                 </View>
            </View>
            <View className="items-end">
                <Text className="text-xl font-bold text-black">${property.price.toLocaleString()}</Text>
                <Text className="text-gray-500">/month</Text>
            </View>
        </View>
        <View className="mt-2 flex-row justify-end">
            <View className="flex-row items-center bg-yellow-100 px-3 py-1 rounded-full">
              <Ionicons name="star" size={14} color="#FFC700" />
              <Text className="text-gray-800 font-bold ml-1">{property.rating}</Text>
            </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function HomeScreen() {
  const router = useRouter();
  const [selectedFilter, setSelectedFilter] = useState('All');

  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-gray-50">
      <View className="px-6 py-4 flex-row items-center justify-between">
        <AppLogo />
        <View className="flex-row items-center">
          <NotificationBell />
          <TouchableOpacity className="ml-4">
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1748443157965-e504a6532648?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D' }}
              className="w-12 h-12 rounded-full"
            />
          </TouchableOpacity>
        </View>
      </View>
      
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        <TouchableOpacity 
          onPress={() => router.push('/(modals)/filter')}
          className="mx-6 mt-2 bg-white rounded-xl p-4 flex-row items-center shadow-sm"
        >
          <Ionicons name="search" size={22} color="gray" />
          <Text className="text-gray-400 flex-1 ml-3">Search Address, city, zip...</Text>
        </TouchableOpacity>

        <View className="mt-6">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 24, gap: 12 }}>
            {filters.map((filter) => (
              <TouchableOpacity
                key={filter}
                onPress={() => setSelectedFilter(filter)}
                className={`px-5 py-3 rounded-full ${ selectedFilter === filter ? 'bg-black' : 'bg-white' }`}
              >
                <Text className={`font-semibold ${ selectedFilter === filter ? 'text-white' : 'text-gray-700' }`}>
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View className="mt-6 px-6">
          {sampleProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}