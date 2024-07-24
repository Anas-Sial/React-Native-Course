import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

export default function ActiveSurvey(props) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.3031 2.07313C16.9493 2.02466 16.578 2 16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C21.9911 7.42307 21.9675 7.05276 21.9201 6.69989C21.4861 6.8928 21.0056 7 20.5 7C18.567 7 17 5.433 17 3.5C17 2.9918 17.1083 2.50891 17.3031 2.07313ZM14.95 12.94L17.26 9.96C17.51 9.64 17.45 9.17 17.12 8.9C16.8 8.64 16.32 8.7 16.07 9.03L13.76 12.01C13.7 12.09 13.63 12.11 13.59 12.11C13.54 12.12 13.47 12.12 13.4 12.06L11.57 10.62C11.2 10.33 10.73 10.2 10.27 10.26C9.8 10.32 9.39 10.56 9.1 10.93L6.72 14.02C6.47 14.35 6.53 14.82 6.86 15.07C7 15.18 7.16 15.23 7.32 15.23C7.54 15.23 7.76 15.13 7.91 14.94L10.29 11.85C10.35 11.77 10.42 11.75 10.46 11.75C10.5 11.74 10.58 11.74 10.65 11.8L12.48 13.24C12.85 13.53 13.31 13.66 13.78 13.6C14.25 13.55 14.66 13.31 14.95 12.94Z"
        fill="#1C3A6E"
      />
      <Path
        d="M20.5 7.75C20.7761 7.75 21 7.52386 21 7.25C21 6.97386 20.7761 6.75 20.5 6.75C20.2239 6.75 20 6.97386 20 7.25C20 7.52386 20.2239 7.75 20.5 7.75Z"
        fill="#1C3A6E"
      />
      <Circle cx="21" cy="3" r="3" fill="#1C3A6E" />
    </Svg>   
  );
}