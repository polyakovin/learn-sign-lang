import { useState } from 'react';
import { easyPhrases } from './phrases';
import Trainer from './Trainer';
import './App.css';

const settingsToShow = [
  {
    code: 'isHandSkeletonShown',
    title: 'Режим аналитики (показывать распознанные данные)',
  },
  {
    code: 'areHintsShown',
    title: 'Показывать подсказки',
  },
];

export default function App() {
  const [phrase, setPhrase] = useState(easyPhrases);
  const [isTrainingMode, setIsTrainingMode] = useState(false);
  const localSettings = JSON.parse(localStorage.getItem('settings') || 'null');
  const defaultSettings = {
    isHandSkeletonShown: false,
    areHintsShown: true,
  };
  const [settings, setSettings] = useState(localSettings || defaultSettings);

  return (
    <>
      {isTrainingMode ? <Trainer
        phrase={phrase}
        setPhrase={setPhrase}
        settings={settings}
      ></Trainer> : <div className="menu">
        {settingsToShow.map(({ code, title }, index) => <label>
          <input
            key={index}
            type="checkbox"
            checked={settings[code]}
            onChange={() => {
              const updatedSettings = {...settings};
              updatedSettings[code] = !updatedSettings[code];
              localStorage.setItem('settings', JSON.stringify(updatedSettings));
              setSettings(updatedSettings);
            }}
          />
          {title}
        </label>)}
        <button onClick={() => setIsTrainingMode(true)}>Начать тренировку</button>
      </div>}
    </>
  );
}
