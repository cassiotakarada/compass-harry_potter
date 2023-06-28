import styled, { keyframes } from 'styled-components';

interface ImgPlatformProps {
  src: string;
  alt: string;
}

interface PhraseProps {
  animationDuration: string;
}

export const ImgPlatform = styled.img<ImgPlatformProps>`
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const Container = styled.div`
    @media (max-width: 425px) {
      display: none;
      width: 100%;
      height: 100%;
  }
      width: 100%;
      height: 100%;
`;

export const Hello = styled.div`
  position: absolute;
  top: 8%;
  left: 10%;
  font-weight: 600;
  color: #333333;
  font-size: 70px;
  width: 300px;
`;

export const Are = styled.div`
  position: absolute;
  top: 27%;
  left: 35%;
  font-weight: 550;
  color: #333333;
  font-size: 60px;
  width: 300px;
`;

export const You = styled.div`
  position: absolute;
  top: 9%;
  left: 55%;
  font-weight: 500;
  color: #333333;
  font-size: 60px;
  width: 300px;
`;

export const Sure = styled.div`
  position: absolute;
  top: 25%;
  left: 65%;
  font-weight: 750;
  color: #333333;
  font-size: 60px;
  width: 300px;
`;

export const Youu = styled.div`
  position: absolute;
  top: 40%;
  left: 20%;
  font-weight: 500;
  color: #333333;
  font-size: 60px;
  width: 300px;
`;

export const Wanna = styled.div`
  position: absolute;
  top: 40%;
  left: 60%;
  font-weight: 550;
  color: #333333;
  font-size: 60px;
  width: 300px;
`;

export const Go = styled.div`
  position: absolute;
  top: 55%;
  left: 10%;
  font-weight: 750;
  color: #333333;
  font-size: 60px;
  width: 300px;
`;

export const In = styled.div`
  position: absolute;
  top: 30%;
  left: 20%;
  font-weight: 550;
  color: #333333;
  font-size: 60px;
  width: 300px;
`;

export const This = styled.div`
  position: absolute;
  top: 40%;
  left: 60%;
  font-weight: 550;
  color: #333333;
  font-size: 60px;
  width: 300px;
`;

export const Adventure = styled.div`
  position: absolute;
  top: 26%;
  left: 26%;
  font-weight: 550;
  color: #333333;
  font-size: 60px;
  width: 450px;
`;

export const Yes = styled.div`
  position: absolute;
  top: 25%;
  left: 42%;
  font-weight: 750;
  color: #333333;
  font-size: 60px;
  width: 450px;
`;

export const Ok = styled.div`
  position: absolute;
  top: 25%;
  left: 42%;
  font-weight: 750;
  color: #333333;
  font-size: 60px;
  width: 450px;
`;

export const First = styled.div`
  position: absolute;
  top: 10%;
  left: 20%;
  font-weight: 600;
  color: #333333;
  font-size: 60px;
  width: 450px;
`;

export const Lets = styled.div`
  position: absolute;
  top: 8%;
  left: 55%;
  font-weight: 600;
  color: #333333;
  font-size: 60px;
  width: 450px;
`;

export const See = styled.div`
  position: absolute;
  top: 25%;
  left: 20%;
  font-weight: 750;
  color: #333333;
  font-size: 60px;
  width: 450px;
`;

export const If = styled.div`
  position: absolute;
  top: 25%;
  left: 75%;
  font-weight: 600;
  color: #333333;
  font-size: 60px;
  width: 450px;
`;

export const Youuu = styled.div`
  position: absolute;
  top: 55%;
  left: 75%;
  font-weight: 500;
  color: #333333;
  font-size: 60px;
  width: 450px;
`;

export const Aree = styled.div`
  position: absolute;
  top: 55%;
  left: 60%;
  font-weight: 500;
  color: #333333;
  font-size: 60px;
  width: 450px;
`;

export const A = styled.div`
  position: absolute;
  top: 35%;
  left: 30%;
  font-weight: 750;
  color: #333333;
  font-size: 60px;
  width: 450px;
`;

export const Real = styled.div`
  position: absolute;
  top: 35%;
  left: 45%;
  font-weight: 600;
  color: #333333;
  font-size: 60px;
  width: 450px;
`;

export const Wizard = styled.div`
  position: absolute;
  top: 26%;
  left: 33%;
  font-weight: 1000;
  color: #333333;
  font-size: 60px;
  width: 450px;
`;

export const Follow = styled.div`
  position: absolute;
  top: 30%;
  left: 15%;
  font-weight: 500;
  color: #333333;
  font-size: 60px;
  width: 450px;
`;

export const Into = styled.div`
  position: absolute;
  top: 45%;
  left: 8%;
  font-weight: 700;
  color: #333333;
  font-size: 60px;
  width: 450px;
`;

export const King = styled.div`
  position: absolute;
  top: 28%;
  left: 32%;
  font-weight: 750;
  color: #333333;
  font-size: 30px;
  width: 450px;
`;

export const Hogwarts = styled.div`
  position: absolute;
  top: 28%;
  left: 30%;
  font-weight: 750;
  color: #333333;
  font-size: 30px;
  width: 450px;
`;

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOutAnimation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const Phrase1 = styled.div`
  opacity: 0;
  transition: opacity 0.5s ease;

  &.show {
    opacity: 1;
    animation: ${fadeInAnimation} 0.5s ease;
  }

  &.hide {
    opacity: 0;
    animation: ${fadeOutAnimation} 0.5s ease;
  }
`;

export const Phrase2 = styled.div`
  opacity: 0;
  transition: opacity 0.5s ease;

  &.show {
    opacity: 1;
    animation: ${fadeInAnimation} 0.5s ease;
  }

  &.hide {
    opacity: 0;
    animation: ${fadeOutAnimation} 0.5s ease;
  }
`;

export const Phrase3 = styled.div`
  opacity: 0;
  transition: opacity 0.5s ease;

  &.show {
    opacity: 1;
    animation: ${fadeInAnimation} 0.5s ease;
  }

  &.hide {
    opacity: 0;
    animation: ${fadeOutAnimation} 0.5s ease;
  }
`;

export const Phrase4 = styled.div`
  opacity: 0;
  transition: opacity 0.5s ease;

  &.show {
    opacity: 1;
    animation: ${fadeInAnimation} 0.5s ease;
  }

  &.hide {
    opacity: 0;
    animation: ${fadeOutAnimation} 1s ease;
  }
`;

export const Phrase5 = styled.div`
  opacity: 0;
  transition: opacity 0.001s ease;

  &.show {
    opacity: 1;
    animation: ${fadeInAnimation} 0.001s ease;
  }

  &.hide {
    opacity: 0;
    animation: ${fadeOutAnimation} 0.5s ease;
  }
`;

export const Phrase6 = styled.div`
  opacity: 0;
  transition: opacity 0.001s ease;

  &.show {
    opacity: 1;
    animation: ${fadeInAnimation} 0.001s ease;
  }

  &.hide {
    opacity: 0;
    animation: ${fadeOutAnimation} 0.5s ease;
  }
`;

export const Phrase7 = styled.div`
  opacity: 0;
  transition: opacity 0.001s ease;

  &.show {
    opacity: 1;
    animation: ${fadeInAnimation} 0.001s ease;
  }

  &.hide {
    opacity: 0;
    animation: ${fadeOutAnimation} 0.5s ease;
  }
`;

export const Phrase8 = styled.div`
  opacity: 0;
  transition: opacity 0.001s ease;

  &.show {
    opacity: 1;
    animation: ${fadeInAnimation} 0.001s ease;
  }

  &.hide {
    opacity: 0;
    animation: ${fadeOutAnimation} 0.5s ease;
  }
`;

export const Phrase9 = styled.div`
  opacity: 0;
  transition: opacity 0.001s ease;

  &.show {
    opacity: 1;
    animation: ${fadeInAnimation} 0.001s ease;
  }

  &.hide {
    opacity: 0;
    animation: ${fadeOutAnimation} 0.5s ease;
  }
`;

export const Phrase10 = styled.div`
  opacity: 0;
  transition: opacity 0.001s ease;

  &.show {
    opacity: 1;
    animation: ${fadeInAnimation} 0.001s ease;
  }

  &.hide {
    opacity: 0;
    animation: ${fadeOutAnimation} 0.5s ease;
  }
`;

export const Phrase11 = styled.div`
  opacity: 0;
  transition: opacity 0.001s ease;

  &.show {
    opacity: 1;
    animation: ${fadeInAnimation} 0.001s ease;
  }

  &.hide {
    opacity: 0;
    animation: ${fadeOutAnimation} 0.5s ease;
  }
`;

export const Phrase12 = styled.div`
  opacity: 0;
  transition: opacity 0.001s ease;

  &.show {
    opacity: 1;
    animation: ${fadeInAnimation} 0.001s ease;
  }

  &.hide {
    opacity: 0;
    animation: ${fadeOutAnimation} 0.5s ease;
  }
`;

export const Phrase13 = styled.div`
  opacity: 0;
  transition: opacity 0.001s ease;

  &.show {
    opacity: 1;
    animation: ${fadeInAnimation} 0.001s ease;
  }

  &.hide {
    opacity: 0;
    animation: ${fadeOutAnimation} 0.5s ease;
  }
`;

export const Phrase14 = styled.div`
  opacity: 0;
  transition: opacity 0.001s ease;

  &.show {
    opacity: 1;
    animation: ${fadeInAnimation} 0.001s ease;
  }

  &.hide {
    opacity: 0;
    animation: ${fadeOutAnimation} 0.5s ease;
  }
`;

export const Phrase15 = styled.div`
  opacity: 0;
  transition: opacity 0.001s ease;

  &.show {
    opacity: 1;
    animation: ${fadeInAnimation} 0.001s ease;
  }

  &.hide {
    opacity: 0;
    animation: ${fadeOutAnimation} 0.5s ease;
  }
`;

export const Phrase16 = styled.div`
  opacity: 0;
  transition: opacity 0.001s ease;

  &.show {
    opacity: 1;
    animation: ${fadeInAnimation} 0.001s ease;
  }

  &.hide {
    opacity: 0;
    animation: ${fadeOutAnimation} 0.5s ease;
  }
`;

export const Phrase17 = styled.div`
  opacity: 0;
  transition: opacity 0.001s ease;

  &.show {
    opacity: 1;
    animation: ${fadeInAnimation} 0.001s ease;
  }

  &.hide {
    opacity: 0;
    animation: ${fadeOutAnimation} 0.5s ease;
  }
`;

export const Phrase18 = styled.div`
  opacity: 0;
  transition: opacity 0.001s ease;

  &.show {
    opacity: 1;
    animation: ${fadeInAnimation} 0.001s ease;
  }

  &.hide {
    opacity: 0;
    animation: ${fadeOutAnimation} 0.5s ease;
  }
`;

export const Phrase19 = styled.div`
  opacity: 0;
  transition: opacity 0.001s ease;

  &.show {
    opacity: 1;
    animation: ${fadeInAnimation} 0.001s ease;
  }

  &.hide {
    opacity: 0;
    animation: ${fadeOutAnimation} 0.5s ease;
  }
`;

export const Phrase20 = styled.div`
  opacity: 0;
  transition: opacity 0.001s ease;

  &.show {
    opacity: 1;
    animation: ${fadeInAnimation} 0.001s ease;
  }

  &.hide {
    opacity: 0;
    animation: ${fadeOutAnimation} 0.5s ease;
  }
`;

export const Phrase21 = styled.div`
  opacity: 0;
  transition: opacity 0.001s ease;

  &.show {
    opacity: 1;
    animation: ${fadeInAnimation} 0.001s ease;
  }

  &.hide {
    opacity: 0;
    animation: ${fadeOutAnimation} 0.5s ease;
  }
`;

export const Phrase22 = styled.div`
  opacity: 0;
  transition: opacity 0.001s ease;

  &.show {
    opacity: 1;
    animation: ${fadeInAnimation} 0.001s ease;
  }

  &.hide {
    opacity: 0;
    animation: ${fadeOutAnimation} 0.5s ease;
  }
`;

export const Phrase23 = styled.div`
  opacity: 0;
  transition: opacity 0.001s ease;

  &.show {
    opacity: 1;
    animation: ${fadeInAnimation} 0.001s ease;
  }

  &.hide {
    opacity: 0;
    animation: ${fadeOutAnimation} 0.5s ease;
  }
`;

export const Phrase24 = styled.div`
  opacity: 0;
  transition: opacity 0.001s ease;

  &.show {
    opacity: 1;
    animation: ${fadeInAnimation} 0.001s ease;
  }

  &.hide {
    opacity: 0;
    animation: ${fadeOutAnimation} 0.5s ease;
  }
`;

export const Phrase25 = styled.div`
  opacity: 0;
  transition: opacity 0.001s ease;

  &.show {
    opacity: 1;
    animation: ${fadeInAnimation} 0.001s ease;
  }

  &.hide {
    opacity: 0;
    animation: ${fadeOutAnimation} 0.5s ease;
  }
`;

const pulseAnimation = keyframes`
  0% {
    background-color: #ffffff;
    color: black;
    transform: scale(1);
  }
  50% {
    background-color: whitesmoke;
    transform: scale(1.2);
  }
  100% {
    background-color: #ffffff;
    color: black;
    transform: scale(1);
  }
`;

export const Button = styled.button`
  position: fixed;
  top: 65%;
  left: 28%;
  padding-left: 10px;
  padding-right: 10px;
  transform: translate(-50%, -50%);
  width: 220px;
  border-radius: 15px;
  border: none;
  background-color: #333333;
  box-shadow: black 20px 20px 20px;
  color: white;
  height: 50px;
  cursor: pointer;
  animation: ${pulseAnimation} 2s infinite;

  &:hover {
    animation: none;
    background-color: #8d8c8c;
    box-shadow: black 20px 20px 20px;
    transform: scale(1.1);
  }
`;