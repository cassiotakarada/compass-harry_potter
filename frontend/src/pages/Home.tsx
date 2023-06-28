import React from 'react';
import HomeScreenEffect from '../components/HomeScreenEffect/HomeScreenEffect';
import AudioPlayer from '../components/Audio/Audio';

const home: React.FC = () => {
  return (
    <>
      <AudioPlayer />
      <HomeScreenEffect />
    </>
  )
}

export default home