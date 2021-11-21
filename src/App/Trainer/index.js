import { useEffect, useState } from 'react';
import { initRecognizer } from '../../utils/gesturesRecognizer';
import { stringToDactylText } from '../../utils/helpers';
import './index.css';

export default function Trainer(props) {
  const { phrase, setPhrase, setMode, settings } = props;
  const [isInited, setIsInited] = useState(false);
  const [recognizedGesture, setRecognizedGesture] = useState(null);

  useEffect(() => {
    if (!isInited) {
      setIsInited(true);
      let remainingPhrase = phrase;
      initRecognizer((newRecognizedGesture) => {
        setRecognizedGesture(newRecognizedGesture);

        if (remainingPhrase.length === 0) {
          setMode('success');
          return;
        }

        if (
          !remainingPhrase[0].toLowerCase().match(/[а-я]/) ||
          newRecognizedGesture.toLowerCase() === remainingPhrase[0].toLowerCase() ||
          (newRecognizedGesture.toLowerCase() === 'п' && remainingPhrase[0].toLowerCase() === 'л') || // TODO: костыль. тяжело распознаёт Л
          (newRecognizedGesture.toLowerCase() === 'м' && remainingPhrase[0].toLowerCase() === 'т') // TODO: костыль. не распознаёт Т
        ) {
          remainingPhrase = remainingPhrase.slice(1);
          setPhrase(remainingPhrase); // TODO: слишком быстро проглатывает. хорошо бы дать обратную связь о том, что правильно показал (для новичков удобно было бы)
        }
      }, settings);
    }
  }, [
    isInited,
    phrase,
    setPhrase,
    setMode,
    recognizedGesture,
    settings,
  ]);

  const dactylText = stringToDactylText(phrase);
  const currentLetter = dactylText[0];

  return (
    <div className="trainer-wrapper">
      <div className="container">
        <div className="trainer">
          <p>{phrase}</p>
          {settings.areHintsShown && <>{settings.isSingleHintShown
            ? <div className="dactyl-row">
              {dactylText.map((letter, i) => (
                <div key={i} className={`letter ${letter}`}></div>
              ))}
            </div>
            : <div className={`dactyl-hint letter ${currentLetter}`}></div>
          }</>}
        </div>
        <div className="recognized-gesture">{recognizedGesture}</div>
        <video className="input_video"></video>
        <canvas className="output_canvas" width="1280px" height="720px"></canvas>
      </div>
    </div>
  );
}
