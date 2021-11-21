import { useState } from 'react';
import * as phrases from './phrases';
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
  {
    code: 'isSingleHintShown',
    title: 'В качестве подсказки показывать все символы сразу',
  },
];

export default function App() {
  const [mode, setMode] = useState('menu');
  const localSettings = JSON.parse(localStorage.getItem('settings') || 'null');
  const defaultSettings = {
    isHandSkeletonShown: false,
    areHintsShown: true,
    isSingleHintShown: false,
    phrase: 'easyPhrases',
  };
  const [settings, setSettings] = useState(localSettings || defaultSettings);
  const [phrase, setPhrase] = useState(phrases[settings.phrase]);

  const updateSettings = (code, value) => {
    const updatedSettings = {...settings};
    updatedSettings[code] = value;
    localStorage.setItem('settings', JSON.stringify(updatedSettings));
    setSettings(updatedSettings);
  };

  let page = null;
  switch (mode) {
    case 'menu':
      page = <div className="menu">
        {settingsToShow.map(({ code, title }, index) => <label>
          <input
            key={index}
            type="checkbox"
            checked={settings[code]}
            onChange={() => updateSettings(code, !settings[code])}
          />
          {title}
        </label>)}
        <label>
          Упражнение:&nbsp;
          <select value={settings.phrase} onChange={({ target }) => {
            updateSettings('phrase', target.value);
            setPhrase(phrases[target.value]);
          }}>
            {Object.keys(phrases).map(phraseKey => <option value={phraseKey}>{phraseKey}</option>)}
          </select>
        </label>
        <button onClick={() => setMode('training')}>Начать тренировку</button>
      </div>;
      break;

    case 'training':
      page = <Trainer
        phrase={phrase}
        setPhrase={setPhrase}
        setMode={setMode}
        settings={settings}
      ></Trainer>;
      break;

    case 'success':
      page = <div className="menu">
        <h1>Поздравляю! Упражнение выполнено!</h1>
        <button onClick={() => window.location.href = '/'}>Вернуться на главную</button>
      </div>;
      break;

    default:
      page = null;
      break;
  }

  return (
    <>
      {page}
    </>
  );
}
