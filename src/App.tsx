import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Details } from './pages/Details';
import { Country } from './services/interfaces/countriesInterface';
import { getAllCountries } from './utils/api';
import { options } from './utils/constants';

export interface IRegion {
  value?: string;
  labels: string | null;
}

function App() {
  const [theme, setTheme] = useState('light');
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState<Country[]>([]);

  const countryInfo = countries.map((country) => {
    return {
      img: country.flags.png,
      name: country.name.common,
      info: [
        {
          title: 'Population',
          description: country.population.toLocaleString(),
        },
        { title: 'Region', description: country.region },
        { title: 'Capital', description: country.capital },
      ],
    };
  });

  useEffect(() => {
    const fetchCountries = async () => {
      const { data } = await getAllCountries();
      setCountries(data);
    };

    if (!countries.length) fetchCountries();
  }, []);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                theme={theme}
                search={search}
                setSearch={setSearch}
                countryInfo={countryInfo}
                countries={countries}
              />
            }
          />
          <Route
            path="/country/:name"
            element={<Details countryInfo={countryInfo} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export { App };
