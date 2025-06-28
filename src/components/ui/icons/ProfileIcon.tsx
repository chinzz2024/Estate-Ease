import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const ProfileIcon = ({ color, size = 28 }: { color: string, size?: number }) => (
  <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <Path
      d="M23.333 24.5v-2.333a4.667 4.667 0 00-4.666-4.667h-9.334a4.667 4.667 0 00-4.666 4.667v2.333"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14 12.833a4.667 4.667 0 100-9.333 4.667 4.667 0 000 9.333z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);