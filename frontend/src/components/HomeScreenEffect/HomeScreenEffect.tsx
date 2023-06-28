import React, { useEffect, useState } from 'react';

import {
  ImgPlatform,
  Hello,
  Are,
  You,
  Sure,
  Youu,
  Wanna,
  Go,
  In,
  This,
  Adventure,
  Yes,
  Ok,
  First,
  Lets,
  See,
  If,
  Youuu,
  Aree,
  A,
  Real,
  Wizard,
  Follow,
  Into,
  King,
  Hogwarts,
  Container,
  Phrase1, Phrase2, Phrase3, Phrase4, Phrase5, Phrase6, Phrase7, Phrase8, Phrase9, Phrase10, Phrase11, Phrase12, Phrase13, Phrase14, Phrase15, Phrase16, Phrase17, Phrase18, Phrase19, Phrase20, Phrase21, Phrase22, Phrase23, Phrase24, Phrase25,
  Button
} from "./homeScreenEffect.styled";

import { GlobalStyle } from '../Global/globalTheme.styled';

import platform from '../../assets/images/plataforma-9-3-4-harry-potter-5.jpg';

const HomeScreenEffect: React.FC = () => {
  const [showPhrase1, setShowPhrase1] = useState(false);
  const [showPhrase2, setShowPhrase2] = useState(false);
  const [showPhrase3, setShowPhrase3] = useState(false);
  const [showPhrase4, setShowPhrase4] = useState(false);
  const [showPhrase5, setShowPhrase5] = useState(false);
  const [showPhrase6, setShowPhrase6] = useState(false);
  const [showPhrase7, setShowPhrase7] = useState(false);
  const [showPhrase8, setShowPhrase8] = useState(false);
  const [showPhrase9, setShowPhrase9] = useState(false);
  const [showPhrase10, setShowPhrase10] = useState(false);
  const [showPhrase11, setShowPhrase11] = useState(false);
  const [showPhrase12, setShowPhrase12] = useState(false);
  const [showPhrase13, setShowPhrase13] = useState(false);
  const [showPhrase14, setShowPhrase14] = useState(false);
  const [showPhrase15, setShowPhrase15] = useState(false);
  const [showPhrase16, setShowPhrase16] = useState(false);
  const [showPhrase17, setShowPhrase17] = useState(false);
  const [showPhrase18, setShowPhrase18] = useState(false);
  const [showPhrase19, setShowPhrase19] = useState(false);
  const [showPhrase20, setShowPhrase20] = useState(false);
  const [showPhrase21, setShowPhrase21] = useState(false);
  const [showPhrase22, setShowPhrase22] = useState(false);
  const [showPhrase23, setShowPhrase23] = useState(false);
  const [showPhrase24, setShowPhrase24] = useState(false);
  const [showPhrase25, setShowPhrase25] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleClick = () => {
      const timeoutId = setTimeout(() => {
      setShowButton(true);
    }, 14500);
  }

  document.addEventListener('click', handleClick);

  return () => {
    document.removeEventListener('click', handleClick);
  };
  }, []);

  useEffect(() => {
    const handleClick = () => {
      const timeoutId = setTimeout(() => {
      setShowPhrase1(true);
    }, 200);

    const hideTimeoutId = setTimeout(() => {
      setShowPhrase1(false);
    }, 850);
  }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const handleClick = () => {
      const timeoutId = setTimeout(() => {
      setShowPhrase2(true);
    }, 800);

    const hideTimeoutId = setTimeout(() => {
      setShowPhrase2(false);
    }, 1350);
  }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const handleClick = () => {
      const timeoutId = setTimeout(() => {
      setShowPhrase3(true);
    }, 1300);

    const hideTimeoutId = setTimeout(() => {
      setShowPhrase3(false);
    }, 1750);
  }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const handleClick = () => {
      const timeoutId = setTimeout(() => {
      setShowPhrase4(true);
    }, 1700);

    const hideTimeoutId = setTimeout(() => {
      setShowPhrase4(false);
    }, 2500);
  }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const handleClick = () => {
      const timeoutId = setTimeout(() => {
      setShowPhrase5(true);
    }, 2500);

    const hideTimeoutId = setTimeout(() => {
      setShowPhrase5(false);
    }, 3000);
  }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const handleClick = () => {
      const timeoutId = setTimeout(() => {
      setShowPhrase6(true);
    }, 2700);

    const hideTimeoutId = setTimeout(() => {
      setShowPhrase6(false);
    }, 3000);
  }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const handleClick = () => {
      const timeoutId = setTimeout(() => {
      setShowPhrase7(true);
    }, 2600);

    const hideTimeoutId = setTimeout(() => {
      setShowPhrase7(false);
    }, 2850);
  }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const handleClick = () => {
      const timeoutId = setTimeout(() => {
      setShowPhrase8(true);
    }, 2800);

    const hideTimeoutId = setTimeout(() => {
      setShowPhrase8(false);
    }, 3100);
  }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const handleClick = () => {
      const timeoutId = setTimeout(() => {
      setShowPhrase9(true);
    }, 3000);

    const hideTimeoutId = setTimeout(() => {
      setShowPhrase9(false);
    }, 3400);
  }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const handleClick = () => {
      const timeoutId = setTimeout(() => {
      setShowPhrase10(true);
    }, 3300);

    const hideTimeoutId = setTimeout(() => {
      setShowPhrase10(false);
    }, 4000);
  }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const handleClick = () => {
      const timeoutId = setTimeout(() => {
      setShowPhrase11(true);
    }, 4350);

    const hideTimeoutId = setTimeout(() => {
      setShowPhrase11(false);
    }, 4900);
  }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const handleClick = () => {
      const timeoutId = setTimeout(() => {
      setShowPhrase12(true);
    }, 5000);

    const hideTimeoutId = setTimeout(() => {
      setShowPhrase12(false);
    }, 5500);
  }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const handleClick = () => {
      const timeoutId = setTimeout(() => {
      setShowPhrase13(true);
    }, 5600);

    const hideTimeoutId = setTimeout(() => {
      setShowPhrase13(false);
    }, 6000);
  }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const handleClick = () => {
      const timeoutId = setTimeout(() => {
      setShowPhrase14(true);
    }, 6100);

    const hideTimeoutId = setTimeout(() => {
      setShowPhrase14(false);
    }, 6600);
  }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const handleClick = () => {
      const timeoutId = setTimeout(() => {
      setShowPhrase15(true);
    }, 6600);

    const hideTimeoutId = setTimeout(() => {
      setShowPhrase15(false);
    }, 7200);
  }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const handleClick = () => {
      const timeoutId = setTimeout(() => {
      setShowPhrase16(true);
    }, 7200);

    const hideTimeoutId = setTimeout(() => {
      setShowPhrase16(false);
    }, 7400);
  }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const handleClick = () => {
      const timeoutId = setTimeout(() => {
      setShowPhrase17(true);
    }, 7400);

    const hideTimeoutId = setTimeout(() => {
      setShowPhrase17(false);
    }, 7700);
  }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const handleClick = () => {
      const timeoutId = setTimeout(() => {
      setShowPhrase18(true);
    }, 7700);

    const hideTimeoutId = setTimeout(() => {
      setShowPhrase18(false);
    }, 8000);
  }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const handleClick = () => {
      const timeoutId = setTimeout(() => {
      setShowPhrase19(true);
    }, 8000);

    const hideTimeoutId = setTimeout(() => {
      setShowPhrase19(false);
    }, 8150);
  }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const handleClick = () => {
      const timeoutId = setTimeout(() => {
      setShowPhrase20(true);
    }, 8200);

    const hideTimeoutId = setTimeout(() => {
      setShowPhrase20(false);
    }, 8500);
  }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const handleClick = () => {
      const timeoutId = setTimeout(() => {
      setShowPhrase21(true);
    }, 8500);

    const hideTimeoutId = setTimeout(() => {
      setShowPhrase21(false);
    }, 9300);
  }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const handleClick = () => {
      const timeoutId = setTimeout(() => {
      setShowPhrase22(true);
    }, 9300);

    const hideTimeoutId = setTimeout(() => {
      setShowPhrase22(false);
    }, 9600);
  }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const handleClick = () => {
      const timeoutId = setTimeout(() => {
      setShowPhrase23(true);
    }, 9600);

    const hideTimeoutId = setTimeout(() => {
      setShowPhrase23(false);
    }, 9900);
  }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const handleClick = () => {
      const timeoutId = setTimeout(() => {
      setShowPhrase24(true);
    }, 9900);

    const hideTimeoutId = setTimeout(() => {
      setShowPhrase24(false);
    }, 11000);
  }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const handleClick = () => {
      const timeoutId = setTimeout(() => {
      setShowPhrase25(true);
    }, 11000);

    const hideTimeoutId = setTimeout(() => {
      setShowPhrase25(false);
    }, 14000);
  }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
        <ImgPlatform src={platform} alt="Platform" />
        <Container>
          <Phrase1 className={showPhrase1 ? 'show' : 'hide'}>
            <Hello>
              <p>Hello!</p>
            </Hello>
          </Phrase1>
          <Phrase1 className={showPhrase2 ? 'show' : 'hide'}>
            <Are>
              <p>are</p>
            </Are>
          </Phrase1>
          <Phrase1 className={showPhrase3 ? 'show' : 'hide'}>
            <You>
              <p>you</p>
            </You>
          </Phrase1>
          <Phrase1 className={showPhrase4 ? 'show' : 'hide'}>
            <Sure>
              <p>sure</p>
            </Sure>
          </Phrase1>
          <Phrase1 className={showPhrase5 ? 'show' : 'hide'}>
            <Youu>
              <p>you</p>
            </Youu>
          </Phrase1>
          <Phrase1 className={showPhrase6 ? 'show' : 'hide'}>
            <Wanna>
              <p>wanna</p>
            </Wanna>
          </Phrase1>
          <Phrase1 className={showPhrase7 ? 'show' : 'hide'}>
            <Go>
              <p>go</p>
            </Go>
          </Phrase1>
          <Phrase1 className={showPhrase8 ? 'show' : 'hide'}>
            <In>
              <p>in</p>
            </In>
          </Phrase1>
          <Phrase1 className={showPhrase9 ? 'show' : 'hide'}>
            <This>
              <p>this</p>
            </This>
          </Phrase1>
          <Phrase1 className={showPhrase10 ? 'show' : 'hide'}>
            <Adventure>
              <p>adventure?</p>
            </Adventure>
          </Phrase1>
          <Phrase1 className={showPhrase11 ? 'show' : 'hide'}>
            <Yes>
              <p>YES?</p>
            </Yes>
          </Phrase1>
          <Phrase1 className={showPhrase12 ? 'show' : 'hide'}>
            <Ok>
              <p>OK!</p>
            </Ok>
          </Phrase1>
          <Phrase1 className={showPhrase13 ? 'show' : 'hide'}>
            <First>
              <p>First</p>
            </First>
          </Phrase1>
          <Phrase1 className={showPhrase14 ? 'show' : 'hide'}>
            <Lets>
              <p>lets</p>
            </Lets>
          </Phrase1>
          <Phrase1 className={showPhrase15 ? 'show' : 'hide'}>
            <See>
              <p>see</p>
            </See>
          </Phrase1>
          <Phrase1 className={showPhrase16 ? 'show' : 'hide'}>
            <If>
              <p>if</p>
            </If>
          </Phrase1>
          <Phrase1 className={showPhrase17 ? 'show' : 'hide'}>
            <Youuu>
              <p>you</p>
            </Youuu>
          </Phrase1>
          <Phrase1 className={showPhrase18 ? 'show' : 'hide'}>
            <Aree>
              <p>are</p>
            </Aree>
          </Phrase1>
          <Phrase1 className={showPhrase19 ? 'show' : 'hide'}>
            <A>
              <p>a</p>
            </A>
          </Phrase1>
          <Phrase1 className={showPhrase20 ? 'show' : 'hide'}>
            <Real>
              <p>real</p>
            </Real>
          </Phrase1>
          <Phrase1 className={showPhrase21 ? 'show' : 'hide'}>
            <Wizard>
              <p>wizard!</p>
            </Wizard>
          </Phrase1>
          <Phrase1 className={showPhrase22 ? 'show' : 'hide'}>
            <Follow>
              <p>Follow me</p>
            </Follow>
          </Phrase1>
          <Phrase1 className={showPhrase23 ? 'show' : 'hide'}>
            <Into>
              <p>into the</p>
            </Into>
          </Phrase1>
          <Phrase1 className={showPhrase24 ? 'show' : 'hide'}>
            <King>
              <p>King's Cross Station</p>
            </King>
          </Phrase1>
          <Phrase1 className={showPhrase25 ? 'show' : 'hide'}>
            <Hogwarts>
              <p>The Hogwarts Express will be here in no time.</p>
            </Hogwarts>
          </Phrase1>
          {showButton && (
            <Button>
              Click here to enter the King's Cross Station
            </Button>
        )}
        </Container>
    </>
  );
};

export default HomeScreenEffect;
