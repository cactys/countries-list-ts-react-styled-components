import {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  ChangeEventHandler,
  ChangeEvent,
} from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { styled } from 'styled-components';

import { Country } from '../services/interfaces/countriesInterface';

import { Controls } from '../components/Controls';
import { CardList } from '../components/CardList';
import { Card, ICardProps } from '../components/Card';
import { getAllCountries } from '../utils/api';
import { IRegion } from '../App';

const CardLink = styled(Link)`
  color: var(--colors-text);
  text-decoration: none;
  transition: var(--op-transition);

  & > :hover {
    opacity: var(--opacity);
  }
`;

const Home = ({
  theme,
  search,
  setSearch,
  region,
  setRegion,
  countryInfo,
  countries,
}: {
  theme: string;
  search: string;
  setSearch: (v: string) => void;
  region?: IRegion;
  setRegion: (v: IRegion) => void;
  countryInfo: ICardProps[];
  countries: Country[];
}) => {
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const handleSearch = (search: string, region?: string) => {
    let data = [...countries];

    if (region)
      data = data.filter((country) => country.region.includes(region));

    if (search)
      data = data.filter((country) =>
        country.name.official.toLowerCase().includes(search.toLowerCase())
      );

    setFilteredCountries(data);
  };

  return (
    <>
      <Controls
        theme={theme}
        search={search}
        setSearch={setSearch}
        region={region}
        setRegion={setRegion}
        onSearch={handleSearch}
      />
      <CardList>
        {filteredCountries?.map((country, index) => (
          <CardLink key={index} to={`/country/${country.name}`}>
            <Card {...country} />
          </CardLink>
        ))}
      </CardList>
    </>
  );
};

export { Home };
