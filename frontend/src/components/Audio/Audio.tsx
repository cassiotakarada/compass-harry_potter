import React, { useEffect, useRef } from 'react';
import { Howl } from 'howler';

import audioFile from '../../assets/audio/hello.wav';

const AudioPlayer = () => {
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    const handleClick = () => {
      soundRef.current = new Howl({
      src: [audioFile],
      autoplay: true,
      loop: false,
      onload: () => {
        soundRef.current?.play(); // Start playing the audio after it's loaded
      },
    });
  }

  document.addEventListener('click', handleClick);

  return () => {
    document.removeEventListener('click', handleClick);
  };
  }, []);

  return null; // This component doesn't render anything visible
};

export default AudioPlayer;
