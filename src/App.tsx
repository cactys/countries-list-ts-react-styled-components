import { useState, useEffect } from 'react';

import { Header } from './components/Header';
import { Search } from './components/Search';

function App() {
  const [theme, setTheme] = useState('light');
  const [search, setSearch] = useState('');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <Search theme={theme} search={search} setSearch={setSearch} />
    </>
  );
}

export { App };
