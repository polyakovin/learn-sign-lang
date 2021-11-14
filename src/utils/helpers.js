export const stringToDactylText = (string) => string
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
