import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { styled } from 'styled-components';

import { Country } from '../services/interfaces/countriesInterface';

import { Controls } from '../components/Controls';
import { CardList } from '../components/CardList';
import { Card, ICardProps } from '../components/Card';
import { getAllCountries } from '../utils/api';

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
  countryInfo,
}: {
  theme: string;
  search: string;
  setSearch: (v: string) => void;
  countryInfo: ICardProps[];
}) => {
  return (
    <>
      <Controls theme={theme} search={search} setSearch={setSearch} />
      <CardList>
        {countryInfo?.map((country, index) => (
          <CardLink key={index} to={`/country/${country.name}`}>
            <Card {...country} />
          </CardLink>
        ))}
      </CardList>
    </>
  );
};

export { Home };
