import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const HeartIcon = ({ color, size = 28 }: { color: string, size?: number }) => (
  <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <Path
      d="M23.155 5.516a6.09 6.09 0 00-8.613 0L14 6.044l-.542-.528a6.09 6.09 0 00-8.613 0 6.09 6.09 0 000 8.613l9.155 9.155 9.155-9.155a6.09 6.09 0 000-8.613z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);