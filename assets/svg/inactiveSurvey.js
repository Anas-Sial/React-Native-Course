{/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 1.25H9C3.57 1.25 1.25 3.57 1.25 9V15C1.25 20.43 3.57 22.75 9 22.75H15C20.43 22.75 22.75 20.43 22.75 15V11C22.75 10.59 22.41 10.25 22 10.25C21.59 10.25 21.25 10.59 21.25 11V15C21.25 19.61 19.61 21.25 15 21.25H9C4.39 21.25 2.75 19.61 2.75 15V9C2.75 4.39 4.39 2.75 9 2.75H13C13.41 2.75 13.75 2.41 13.75 2C13.75 1.59 13.41 1.25 13 1.25Z" fill="#292D32" fill-opacity="0.4"/>
<path d="M7.33009 15.252C7.17009 15.252 7.0101 15.202 6.8701 15.092C6.5401 14.842 6.48012 14.372 6.73012 14.042L9.11009 10.952C9.40009 10.582 9.81011 10.342 10.2801 10.282C10.7501 10.222 11.2101 10.352 11.5801 10.642L13.4101 12.082C13.4801 12.142 13.5501 12.132 13.6001 12.132C13.6401 12.132 13.7101 12.112 13.7701 12.032L16.0801 9.05196C16.3301 8.72196 16.8001 8.66197 17.1301 8.92197C17.4601 9.17197 17.5201 9.64198 17.2601 9.97198L14.9501 12.952C14.6601 13.322 14.2501 13.562 13.7801 13.612C13.3201 13.672 12.8501 13.542 12.4901 13.252L10.6601 11.812C10.5901 11.752 10.5101 11.752 10.4701 11.762C10.4301 11.762 10.3601 11.782 10.3001 11.862L7.92012 14.952C7.78012 15.152 7.56009 15.252 7.33009 15.252Z" fill="#292D32" fill-opacity="0.4"/>
<circle cx="19" cy="4" r="2.5" stroke="black" stroke-opacity="0.4"/>
</svg> */}

import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

export default function InactiveSurvey(props) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path d="M13 1.25H9C3.57 1.25 1.25 3.57 1.25 9V15C1.25 20.43 3.57 22.75 9 22.75H15C20.43 22.75 22.75 20.43 22.75 15V11C22.75 10.59 22.41 10.25 22 10.25C21.59 10.25 21.25 10.59 21.25 11V15C21.25 19.61 19.61 21.25 15 21.25H9C4.39 21.25 2.75 19.61 2.75 15V9C2.75 4.39 4.39 2.75 9 2.75H13C13.41 2.75 13.75 2.41 13.75 2C13.75 1.59 13.41 1.25 13 1.25Z" fill="#292D32" fill-opacity="0.4"/>
    <Path d="M7.33009 15.252C7.17009 15.252 7.0101 15.202 6.8701 15.092C6.5401 14.842 6.48012 14.372 6.73012 14.042L9.11009 10.952C9.40009 10.582 9.81011 10.342 10.2801 10.282C10.7501 10.222 11.2101 10.352 11.5801 10.642L13.4101 12.082C13.4801 12.142 13.5501 12.132 13.6001 12.132C13.6401 12.132 13.7101 12.112 13.7701 12.032L16.0801 9.05196C16.3301 8.72196 16.8001 8.66197 17.1301 8.92197C17.4601 9.17197 17.5201 9.64198 17.2601 9.97198L14.9501 12.952C14.6601 13.322 14.2501 13.562 13.7801 13.612C13.3201 13.672 12.8501 13.542 12.4901 13.252L10.6601 11.812C10.5901 11.752 10.5101 11.752 10.4701 11.762C10.4301 11.762 10.3601 11.782 10.3001 11.862L7.92012 14.952C7.78012 15.152 7.56009 15.252 7.33009 15.252Z" fill="#292D32" fill-opacity="0.4"/>
    <Circle cx="19" cy="4" r="2.5" stroke="black" stroke-opacity="0.4"/>
    </Svg>
  );
}