import React, { useEffect, useState } from 'react';

import { ImgPlatform, Hello, Are, You, Sure, Youu, Wanna, Go, In, This, Adventure, Yes, Ok, First, Lets, See, If, Youuu, Aree, A, Real, Wizard, Follow, Into, King, Hogwarts } from "./homeScreenEffect.styled";
import { GlobalStyle } from '../Global/globalTheme.styled';

import platform from '../../assets/images/plataforma-9-3-4-harry-potter-5.jpg';

import audioFile from '../../assets/audio/Hello Are you s 2.wav';

const HomeScreenEffect: React.FC = () => {
  useEffect(() => {
    const audioElement = document.getElementById('audio-element') as HTMLAudioElement;

    const handleCanPlay = () => {
      audioElement.removeEventListener('canplaythrough', handleCanPlay);
      audioElement.play();
    };

    audioElement.addEventListener('canplaythrough', handleCanPlay);

    return () => {
      audioElement.removeEventListener('canplaythrough', handleCanPlay);
    };
  }, []);
  
  return (
    <>
      <audio id="audio-element">
        <source src={audioFile} type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
      <GlobalStyle />
        <ImgPlatform src={platform} alt="Platform"/>
        <Hello><p>Hello!</p></Hello>
        <Are><p>are</p></Are>
        <You><p>you</p></You>
        <Sure><p>sure</p></Sure>
        <Youu><p>you</p></Youu>
        <Wanna><p>wanna</p></Wanna>
        <Go><p>go</p></Go>
        <In><p>in</p></In>
        <This><p>this</p></This>
        <Adventure><p>adventure?</p></Adventure>
        <Yes><p>YES?</p></Yes>
        <Ok><p>OK!</p></Ok>
        <First><p>First</p></First>
        <Lets><p>lets</p></Lets>
        <See><p>see</p></See>
        <If><p>if</p></If>
        <Youuu><p>you</p></Youuu>
        <Aree><p>are</p></Aree>
        <A><p>a</p></A>
        <Real><p>real</p></Real>
        <Wizard><p>wizard!</p></Wizard>
        <Follow><p>Follow me</p></Follow>
        <Into><p>into the</p></Into>
        <King><p>King's Cross Station</p></King>
        <Hogwarts><p>The Hogwarts Express will be here in no time.</p></Hogwarts>
    </>
  );
};

export default HomeScreenEffect;
