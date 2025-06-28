// MODIFIED: Provides a fallback background for Android/web
import { View } from 'react-native';

export default function TabBarBackground() {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        // This is the semi-transparent dark color from the design
        backgroundColor: 'rgba(34, 34, 34, 0.9)', 
        borderRadius: 35, // Match the tab bar's border radius
      }}
    />
  );
}

export function useBottomTabOverflow() {
  return 0;
}