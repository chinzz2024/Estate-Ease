// FINAL CORRECTED VERSION - Missing imports have been added.
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View, 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FilterModal() {
  const [selectedTab, setSelectedTab] = useState('For Rent');
  const [city, setCity] = useState('New York');
  const [country, setCountry] = useState('United States');
  const [selectedCategory, setSelectedCategory] = useState('Apartments');
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>(['Parking', 'Kitchen']);

  const tabs = ['For Sale', 'For Rent', 'For Buy'];
  const categories = ['Apartments', 'House', 'All', 'Hotel', 'Penthouse', 'Land', 'Villa'];
  const facilities = ['Parking', 'Kitchen', 'Free Wifi', 'Garden', 'Pool'];

  const toggleFacility = (facility: string) => {
    setSelectedFacilities(prev => 
      prev.includes(facility) 
        ? prev.filter(f => f !== facility)
        : [...prev, facility]
    );
  };

  const Dropdown = ({ label, value }: { label: string, value: string }) => (
    <View className="flex-1">
      <Text className="text-gray-500 font-medium mb-2">{label}</Text>
      <TouchableOpacity className="flex-row items-center justify-between border border-gray-200 rounded-lg px-4 py-3 bg-white">
        <Text className="font-semibold">{value}</Text>
        <Ionicons name="chevron-down" size={16} color="gray" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-gray-50">
      <View className="px-6 py-4 border-b border-gray-200 bg-white">
        <View className="flex-row items-center justify-between">
          <Text className="text-2xl font-bold">Filters</Text>
          <TouchableOpacity>
            <Text className="text-green-600 font-semibold">Clear All</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <View className="px-6">
          <View className="py-6">
            <View className="flex-row  rounded-lg gap-2">
              {tabs.map((tab,index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setSelectedTab(tab)}
                  className={`flex-1 p-3 rounded-xl ${
                    selectedTab === tab ? 'bg-black':'bg-gray-200'
                  }`}
                >
                  <Text className={`text-center font-semibold ${
                    selectedTab === tab ? 'text-white' : 'text-black'
                  }`}>
                    {tab}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View className="pb-6">
            <View className="flex-row space-x-4">
              <View className="flex-1">
                <Text className="text-gray-500 font-medium mb-2">City</Text>
                <TextInput
                  value={city}
                  onChangeText={setCity}
                  className="border border-gray-200 rounded-lg px-4 py-3 bg-white font-semibold"
                  placeholder="Enter city"
                />
              </View>
              <View className="flex-1">
                <Text className="text-gray-500 font-medium mb-2">Country</Text>
                <TextInput
                  value={country}
                  onChangeText={setCountry}
                  className="border border-gray-200 rounded-lg px-4 py-3 bg-white font-semibold"
                  placeholder="Enter country"
                />
              </View>
            </View>
          </View>

          <View className="pb-6">
            <Text className="text-xl font-bold mb-3">Select Category</Text>
            <View className="flex-row flex-wrap -m-1">
              {categories.map((category) => (
                <TouchableOpacity
                  key={category}
                  onPress={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full m-1 ${selectedCategory === category ? 'bg-black' : 'bg-white'}`}
                >
                  <Text className={`font-semibold ${selectedCategory === category ? 'text-white' : 'text-gray-700'}`}>
                    {category}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View className="pb-6">
            <Text className="text-xl font-bold mb-4">Price Range</Text>
            <View className="flex-row justify-between mb-2">
              <Text className="font-bold text-lg">$250</Text>
              <Text className="font-bold text-lg">$1000</Text>
            </View>
            <View className="h-1 bg-gray-200 rounded-full">
              <View className="h-1 bg-green-500 rounded-full" style={{ width: '75%', marginLeft: '10%' }} />
              <View className="absolute -top-2 w-5 h-5 bg-white border-2 border-green-500 rounded-full" style={{ left: '10%' }}/>
              <View className="absolute -top-2 w-5 h-5 bg-white border-2 border-green-500 rounded-full" style={{ left: '85%' }}/>
            </View>
          </View>

          <View className="pb-6 flex-row space-x-4">
            <Dropdown label="Bed Rooms" value="3 Rooms" />
            <Dropdown label="Bathrooms" value="2 Bathrooms" />
          </View>

          <View className="pb-6">
            <Text className="text-xl font-bold mb-3">Facility Place</Text>
            <View className="flex-row flex-wrap -m-1">
              {facilities.map((facility) => (
                <TouchableOpacity
                  key={facility}
                  onPress={() => toggleFacility(facility)}
                  className={`px-4 py-2 rounded-full m-1 flex-row items-center ${selectedFacilities.includes(facility) ? 'bg-black' : 'bg-white'}`}
                >
                   {selectedFacilities.includes(facility) && <Ionicons name="checkmark-circle" size={16} color="white" style={{ marginRight: 6 }} />}
                  <Text className={`font-semibold ${selectedFacilities.includes(facility) ? 'text-white' : 'text-gray-700'}`}>
                    {facility}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      <View className="absolute bottom-0 left-0 right-0 p-6 bg-gray-50 border-t border-gray-200">
        <TouchableOpacity className="bg-[#20C065] py-4 rounded-full">
          <Text className="text-center text-white font-bold text-lg">Apply Filters</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}