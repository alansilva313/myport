import { createContext, useEffect, useState } from 'react';

export const ThemeContext: any = createContext({});

function ThemeProvider({ children }: any) {
  const [isDarkTheme, setIsDarkTheme] = useState(false); // Estado para controlar o tema

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkTheme) {
      html.classList.add('dark');
      html.classList.remove('light');
    } else {
      html.classList.add('light');
      html.classList.remove('dark');
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(prevIsDarkTheme => !prevIsDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider };
