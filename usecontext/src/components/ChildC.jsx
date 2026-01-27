import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const ChildC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={handleClick}>
      Change Theme
    </button>
  );
};

export default ChildC;
