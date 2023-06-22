import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

const GameArea = styled.div`
  position: relative;
  width: 800px;
  height: 400px;
  margin: 0 auto;
  border: 1px solid #ccc;
  overflow: hidden;
`;

const Ball = styled.div<{ gameOver?: boolean }>`
  position: absolute;
  background-color: #f00;
  transition: all 0.2s ease-in-out;

  ${(props) =>
    props.gameOver &&
    css`
      background-color: #ccc;
    `}
`;

const Obstacle = styled.div<{ gameOver?: boolean }>`
  position: absolute;
  background-color: #000;

  ${(props) =>
    props.gameOver &&
    css`
      background-color: #ccc;
    `}
`;

const GameOverMessage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  text-align: center;
`;

const Score = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 18px;
`;

const RestartButton = styled.button`
  margin-top: 10px;
`;

const Quadriball: React.FC = () => {
  const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });
  const [obstaclePosition, setObstaclePosition] = useState({ x: 500, y: 200 });
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const gameAreaRef = useRef<HTMLDivElement>(null);

  const gameAreaWidth = 800;
  const gameAreaHeight = 400;
  const ballSize = 20;
  const obstacleSize = 50;
  const moveDistance = 10;

  useEffect(() => {
    if (gameOver) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
          moveBall(0, -moveDistance);
          break;
        case 'ArrowDown':
          moveBall(0, moveDistance);
          break;
        case 'ArrowLeft':
          moveBall(-moveDistance, 0);
          break;
        case 'ArrowRight':
          moveBall(moveDistance, 0);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [gameOver]);

  useEffect(() => {
    if (gameOver) return;

    const checkCollision = () => {
      const ballRect = getBoundingRect(ballPosition, ballSize);
      const obstacleRect = getBoundingRect(obstaclePosition, obstacleSize);

      if (isColliding(ballRect, obstacleRect)) {
        setGameOver(true);
      } else if (ballRect.left >= obstacleRect.right) {
        setScore((prevScore) => prevScore + 1);
        setObstaclePosition(getRandomPosition());
      }
    };

    const interval = setInterval(checkCollision, 10);
    return () => {
      clearInterval(interval);
    };
  }, [ballPosition, obstaclePosition, gameOver]);

  const moveBall = (x: number, y: number) => {
    const newBallPosition = {
      x: clamp(ballPosition.x + x, 0, gameAreaWidth - ballSize),
      y: clamp(ballPosition.y + y, 0, gameAreaHeight - ballSize),
    };

    setBallPosition(newBallPosition);
  };

  const clamp = (value: number, min: number, max: number) => {
    return Math.min(Math.max(value, min), max);
  };

  const getBoundingRect = (position: { x: number; y: number }, size: number) => {
    return {
      top: position.y,
      right: position.x + size,
      bottom: position.y + size,
      left: position.x,
    };
  };

  const isColliding = (rect1: any, rect2: any) => {
    return (
      rect1.top < rect2.bottom &&
      rect1.right > rect2.left &&
      rect1.bottom > rect2.top &&
      rect1.left < rect2.right
    );
  };

  const getRandomPosition = () => {
    return {
      x: Math.floor(Math.random() * (gameAreaWidth - obstacleSize)),
      y: Math.floor(Math.random() * (gameAreaHeight - obstacleSize)),
    };
  };

  const handleRestart = () => {
    setBallPosition({ x: 0, y: 0 });
    setObstaclePosition(getRandomPosition());
    setScore(0);
    setGameOver(false);
  };

  return (
    <GameArea ref={gameAreaRef}>
      <Ball
        gameOver={gameOver}
        style={{
          left: ballPosition.x,
          top: ballPosition.y,
          width: ballSize,
          height: ballSize,
        }}
      ></Ball>
      <Obstacle
        gameOver={gameOver}
        style={{
          left: obstaclePosition.x,
          top: obstaclePosition.y,
          width: obstacleSize,
          height: obstacleSize,
        }}
      ></Obstacle>
      {gameOver && (
        <GameOverMessage>
          Game Over!
          <RestartButton onClick={handleRestart}>Restart</RestartButton>
        </GameOverMessage>
      )}
      <Score>Score: {score}</Score>
    </GameArea>
  );
};

export default Quadriball;
