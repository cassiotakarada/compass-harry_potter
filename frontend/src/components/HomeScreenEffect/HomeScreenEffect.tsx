import React, { useEffect, useState } from 'react';
import './HomeScreenEffect.css';

const phrases = ['Are', 'you', 'sure', 'you', 'wanna', 'keep', 'going', '?'];

const HomeScreenEffect: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullPhrase, setShowFullPhrase] = useState(false);

  useEffect(() => {
    if (currentIndex === phrases.length) {
      setShowFullPhrase(true);
    } else if (currentIndex < phrases.length) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 1000); // Adjust the duration (in milliseconds) for fading in and out each phrase

      return () => clearInterval(interval);
    }
  }, [currentIndex]);

  return (
    <div className="App">
      <div className="phrases-container">
        {phrases.map((phrase, index) => (
          <div
            key={index}
            className={`fade-in-out ${currentIndex > index ? 'visible' : ''}`}
            style={{
              top: showFullPhrase ? '50%' : `${10 + index * 30}px`,
              left: showFullPhrase ? '50%' : '0',
              opacity: showFullPhrase ? 1 : currentIndex === index ? 1 : 0,
              transition: showFullPhrase ? 'all 0.5s ease-in-out' : 'none'
            }}
          >
            {phrase}
          </div>
        ))}
      </div>
      {showFullPhrase && (
        <div className="full-phrase">{phrases.join(' ')}</div>
      )}
    </div>
  );
};

export default HomeScreenEffect;
