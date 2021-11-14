import { useEffect, useState } from 'react';
import { GestureEstimator, GestureDescription, Finger, FingerCurl, FingerDirection } from 'fingerpose';
import './App.css';

const { Hands, drawConnectors, drawLandmarks, HAND_CONNECTIONS, Camera } = window;

const DactylGestures = {
  А: new GestureDescription('А'),
  В: new GestureDescription('В'),
};
DactylGestures.А.addCurl(Finger.Thumb, FingerCurl.NoCurl);
DactylGestures.А.addCurl(Finger.Index, FingerCurl.FullCurl);
DactylGestures.А.addCurl(Finger.Middle, FingerCurl.FullCurl);
DactylGestures.А.addCurl(Finger.Ring, FingerCurl.FullCurl);
DactylGestures.А.addCurl(Finger.Pinky, FingerCurl.FullCurl);
DactylGestures.А.addDirection(Finger.Thumb, FingerDirection.VerticalUp);
DactylGestures.А.addDirection(Finger.Index, FingerDirection.VerticalUp);
DactylGestures.А.addDirection(Finger.Middle, FingerDirection.VerticalUp);
DactylGestures.А.addDirection(Finger.Ring, FingerDirection.VerticalUp);
DactylGestures.А.addDirection(Finger.Pinky, FingerDirection.VerticalUp);

DactylGestures.В.addCurl(Finger.Thumb, FingerCurl.NoCurl);
DactylGestures.В.addCurl(Finger.Index, FingerCurl.NoCurl);
DactylGestures.В.addCurl(Finger.Middle, FingerCurl.NoCurl);
DactylGestures.В.addCurl(Finger.Ring, FingerCurl.NoCurl);
DactylGestures.В.addCurl(Finger.Pinky, FingerCurl.NoCurl);
DactylGestures.В.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft);
DactylGestures.В.addDirection(Finger.Index, FingerDirection.VerticalUp);
DactylGestures.В.addDirection(Finger.Middle, FingerDirection.VerticalUp);
DactylGestures.В.addDirection(Finger.Ring, FingerDirection.VerticalUp);
DactylGestures.В.addDirection(Finger.Pinky, FingerDirection.VerticalUp);

const gestureEstimator = new GestureEstimator([
  DactylGestures.А,
  DactylGestures.В,
]);

function initRecognizer(cbOnChange) {
  const videoElement = document.getElementsByClassName('input_video')[0];
  const canvasElement = document.getElementsByClassName('output_canvas')[0];
  const canvasCtx = canvasElement.getContext('2d');

  function onResults(results) {
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.translate(canvasElement.width, 0);
    canvasCtx.scale(-1, 1);
    canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);
    if (results.multiHandLandmarks) {
      for (const landmarks of results.multiHandLandmarks) {
        drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS,
                      {color: '#00FF00', lineWidth: 5});
        drawLandmarks(canvasCtx, landmarks, {color: '#FF0000', lineWidth: 2});

        const landmarksArrays = landmarks.map(({x, y, z}) => [x, y, z]);
        const recognizedGestures = gestureEstimator.estimate(landmarksArrays, 9);
        // console.log(recognizedGestures.gestures);
        // console.log(recognizedGestures.gestures.find(({name}) => name === 'А').score);
        console.log(...recognizedGestures.poseData);

        if (recognizedGestures.gestures.length > 0) {
          cbOnChange(recognizedGestures.gestures);
        }
      }
    }
    canvasCtx.restore();

  }

  const hands = new Hands({locateFile: (file) => {
    return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
  }});
  hands.setOptions({
    maxNumHands: 1,
    modelComplexity: 1,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
  });
  hands.onResults(onResults);

  const camera = new Camera(videoElement, {
    onFrame: async () => {
      await hands.send({image: videoElement});
    },
    width: 1280,
    height: 720
  });
  camera.start();
}

function App() {
  const [isInited, setIsInited] = useState(false);
  const [phrase, setPhrase] = useState('вавававааваавааваавававав Привет, Зоя! Как дела? Чё делаешь?');
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

  const dactylText = phrase
    .toLowerCase()
    .split('')
    .filter(letter => letter.match(/[а-я\s]/))
    .map(letter =>
      letter === ' ' || letter === 'ъ'
        ? '_'
        : letter === 'ё'
          ? 'е'
          : letter
    );

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
