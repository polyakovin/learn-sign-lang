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
  const [mode, setMode] = useState('menu');
  const localSettings = JSON.parse(localStorage.getItem('settings') || 'null');
  const defaultSettings = {
    isHandSkeletonShown: false,
    areHintsShown: true,
  };
  const [settings, setSettings] = useState(localSettings || defaultSettings);

  let page = null;
  switch (mode) {
    case 'menu':
      page = <div className="menu">
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
        <button onClick={() => setMode('menu')}>Вернуться на главную</button>
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
