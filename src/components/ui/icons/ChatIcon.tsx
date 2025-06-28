import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const ChatIcon = ({ color, size = 28 }: { color: string, size?: number }) => (
  <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <Path
      d="M8.167 21.001A9.333 9.333 0 0015.63 24.5a9.333 9.333 0 009.333-9.333 9.333 9.333 0 00-9.333-9.334h-1.866A9.333 9.333 0 004.43 15.167v1.867L3.5 22.167l5.133-1.166h-.466z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path d="M11.667 14h.012m4.645 0h.012" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);