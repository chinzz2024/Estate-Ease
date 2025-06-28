import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const HomeIcon = ({ color, focused, size = 28 }: { color: string, focused: boolean, size?: number }) => {
  if (focused) {
    return (
      <Svg width={size} height={size} viewBox="0 0 28 28">
        <Path 
          d="M14 2.5 L25.25 9.5 L21.75 22.5 H6.25 L2.75 9.5 Z" 
          fill={color} 
        />
        <Path 
          d="M12.25 15.75h3.5" 
          stroke="#A3F596" 
          strokeWidth="2" 
          strokeLinecap="round" 
        />
      </Svg>
    );
  }
  return (
    <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
        <Path 
          d="M14 2.5 L25.25 9.5 L21.75 22.5 H6.25 L2.75 9.5 Z" 
          stroke={color}
          strokeWidth="1.5"
        />
    </Svg>
  );
};