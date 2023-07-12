import { FC } from 'react';
import { styled } from 'styled-components';
import { Countries } from '../services/types/countriesType';

interface IInfoCardProps {
  title: string;
  description: string[];
}

interface ICardProps {
  img: string;
  name: string;
  info: IInfoCardProps[];
  onClick: () => void;
}

const Wrapper = styled.article``;

const CardImage = styled.img``;

const CardBody = styled.div``;

const CardTitle = styled.h3``;

const CardList = styled.ul``;

const CardListItem = styled.li``;

const Card: FC<ICardProps> = ({ img, name, info, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <CardImage />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map((el) => (
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
