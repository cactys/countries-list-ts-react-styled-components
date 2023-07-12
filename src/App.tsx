import { useState, useEffect } from 'react';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Controls } from './components/Controls';
import { Countries } from './services/types/countriesType';
import { getAllCountries } from './utils/api';
import { CardList } from './components/CardList';
import { Card } from './components/Card';

function App() {
  const [theme, setTheme] = useState('light');
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState<Countries>([]);

  console.log(countries);

  useEffect(() => {
    const fetchCountries = async () => {
      const { data } = await getAllCountries();
      setCountries(data);
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <Main>
        <Controls theme={theme} search={search} setSearch={setSearch} />
        <CardList>
          {countries?.map((country) => {
            const countryInfo = {
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

            return (
              <Card
                key={countryInfo.name}
                img={countryInfo.img}
                name={countryInfo.name}
                info={countryInfo.info}
              />
            );
          })}
        </CardList>
      </Main>
    </>
  );
}

export { App };
