import { useEffect, useState } from 'react';
import { initRecognizer } from './utils/gesturesRecognizer';
import { stringToDactylText } from './utils/helpers';
import { testTwoLetters } from './phrases';
import './App.css';

function App() {
  const [isInited, setIsInited] = useState(false);
  const [phrase, setPhrase] = useState(testTwoLetters);
  const [recognizedGesture, setRecognizedGesture] = useState(null);

  useEffect(() => {
    if (!isInited) {
      setIsInited(true);
      let remainingPhrase = phrase;
      initRecognizer((gestures) => {
        const newRecognizedGesture = gestures.sort((a, b) => b.score - a.score)[0].name;
        setRecognizedGesture(newRecognizedGesture);
        if (newRecognizedGesture.toLowerCase() === remainingPhrase[0]) {
          remainingPhrase = remainingPhrase.slice(1);
          if (remainingPhrase[0] === ' ') {
            remainingPhrase = remainingPhrase.slice(1);
          }
          setPhrase(remainingPhrase);
        }
      });
    }
  }, [isInited, phrase, recognizedGesture]);

  const dactylText = stringToDactylText(phrase);

  return (
    <div className="App">
      <div className="container">
        <div className="trainer">
          <p>{phrase}</p>
          <div className="dactyl-row">
            {dactylText.map((letter, i) => (
              <div key={i} className={`letter ${letter}`}></div>
            ))}
          </div>
        </div>
        <div className="recognized-gesture">{recognizedGesture}</div>
        <video className="input_video"></video>
        <canvas className="output_canvas" width="1280px" height="720px"></canvas>
      </div>
    </div>
  );
}

export default App;
