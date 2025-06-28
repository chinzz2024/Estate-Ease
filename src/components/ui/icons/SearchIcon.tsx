import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const SearchIcon = ({ color, size = 28 }: { color: string, size?: number }) => (
  <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <Path
      d="M13.417 23.333a9.916 9.916 0 100-19.833 9.916 9.916 0 000 19.833z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path d="M24.5 24.5l-3.267-3.267" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);