
import { ThemeProvider, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import 'react-native-reanimated';
import '../../global.css';
import { useColorScheme } from '@/src/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    'Manrope-Bold': require('../assets/fonts/Manrope-Bold.ttf'),
    'Manrope-ExtraBold': require('../assets/fonts/Manrope-ExtraBold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(property)/[id]" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)/contact" options={{ presentation: 'formSheet', headerShown: false, sheetCornerRadius: 24, sheetGrabberVisible: true }} />
        <Stack.Screen name="(modals)/filter" options={{ presentation: 'formSheet', headerShown: false, sheetCornerRadius: 24, sheetGrabberVisible: true }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}