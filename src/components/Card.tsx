import { FC } from 'react';
import { styled } from 'styled-components';
import { Countries } from '../services/types/countriesType';
import { Country } from '../services/interfaces/countriesInterface';

interface IInfoCardProps {
  title: string;
  description: string[] | string;
}

export interface ICardProps {
  img: string;
  name: string;
  info: IInfoCardProps[];
}

const Wrapper = styled.article`
  border-radius: var(--radii);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  overflow: hidden;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;

const CardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`;

const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0;
`;

const CardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);

  & > span {
    font-weight: var(--fw-normal);
  }
`;

const Card = (props: Country) => {
  const { flags, name, region, capital, population } = props;

  const countryInfo = {
    info: [
      {
        title: 'Population',
        description: population.toLocaleString(),
      },
      { title: 'Region', description: region },
      { title: 'Capital', description: capital },
    ],
  };

  return (
    <Wrapper>
      <CardImage src={flags.png} alt={name.official} />
      <CardBody>
        <CardTitle>{name.official}</CardTitle>
        <CardList>
          {countryInfo.info.map((el) => (
            <CardListItem key={el.title}>
              <span>{el.title}:</span> {el.description}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  );
};

export { Card };
