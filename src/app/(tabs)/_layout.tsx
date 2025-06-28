
import { Tabs } from 'expo-router';
import React from 'react';
import { View, TouchableOpacity, Platform } from 'react-native';
import { BlurView } from 'expo-blur';
import { HomeIcon } from '@/src/components/ui/icons/HomeIcon';
import { ChatIcon } from '@/src/components/ui/icons/ChatIcon';
import { SearchIcon } from '@/src/components/ui/icons/SearchIcon';
import { HeartIcon } from '@/src/components/ui/icons/HeartIcon';
import { ProfileIcon } from '@/src/components/ui/icons/ProfileIcon';

function CustomTabBar({ state, descriptors, navigation }: any) {
  return (
    <View style={{ position: 'absolute', bottom: 25, left: 20, right: 20, height: 65, borderRadius: 35, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 5, elevation: 5 }}>
      <BlurView tint="light" intensity={90} style={{ flexDirection: 'row', flex: 1, borderRadius: 35, overflow: 'hidden' }}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;
          const iconSize = 24;
          const inactiveColor = '#000000';
          let iconComponent;

          if (route.name === 'index') { iconComponent = <HomeIcon size={iconSize} color={isFocused ? 'black' : inactiveColor} focused={isFocused} />; }
          else if (route.name === 'chat') { iconComponent = <ChatIcon size={iconSize} color={isFocused ? 'black' : inactiveColor} />; }
          else if (route.name === 'search') { iconComponent = <SearchIcon size={iconSize} color={isFocused ? 'black' : inactiveColor} />; }
          else if (route.name === 'favorites') { iconComponent = <HeartIcon size={iconSize} color={isFocused ? 'black' : inactiveColor} />; }
          else if (route.name === 'profile') { iconComponent = <ProfileIcon size={iconSize} color={isFocused ? 'black' : inactiveColor} />; }

          const onPress = () => {
            const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });
            if (!isFocused && !event.defaultPrevented) { navigation.navigate(route.name, route.params); }
          };

          return (
            <TouchableOpacity key={route.key} onPress={onPress} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ width: 45, height: 45, borderRadius: 22.5, justifyContent: 'center', alignItems: 'center', backgroundColor: isFocused ? '#A3F596' : 'white' }}>
                {iconComponent}
              </View>
            </TouchableOpacity>
          );
        })}
      </BlurView>
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <CustomTabBar {...props} />}>
      <Tabs.Screen name="index" options={{ headerShown: false }} />
      <Tabs.Screen name="chat" options={{ headerShown: false }} />
      <Tabs.Screen name="search" options={{ headerShown: false }} />
      <Tabs.Screen name="favorites" options={{ headerShown: false }} />
      <Tabs.Screen name="profile" options={{ headerShown: false }} />
    </Tabs>
  );
}