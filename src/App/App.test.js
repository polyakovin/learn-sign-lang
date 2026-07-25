import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.localStorage.clear();
});

test('renders the training menu', () => {
  render(<App />);

  expect(
    screen.getByRole('button', { name: 'Начать тренировку' })
  ).toBeInTheDocument();
  expect(screen.getByLabelText(/показывать подсказки/i)).toBeChecked();
  expect(screen.getByLabelText(/упражнение/i)).toHaveValue('easyPhrases');
});
