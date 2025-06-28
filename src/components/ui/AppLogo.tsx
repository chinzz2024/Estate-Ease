// FINAL GUARANTEED VERSION - Uses your image file with a reliable path.
import React from 'react';
import { View, Text, Image } from 'react-native';

export function AppLogo() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Manrope-Bold', fontSize: 24, color: '#1F2937' }}>
            Estate
        </Text>
        <View>
            <Image
                // This path is correct for a component in src/components/ui
                source={require('../../assets/images/logo-graphic.png')}
                style={{
                    width: 45,
                    height: 15,
                    position: 'absolute',
                    top: 0, 
                    left: 2,
                }}
                resizeMode="contain"
            />
            <Text style={{ fontFamily: 'Manrope-ExtraBold', fontSize: 24, color: '#111827' }}>
                Ease
            </Text>
        </View>
    </View>
  );
}