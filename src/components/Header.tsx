import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { BiMoon, BiSolidMoon, BiHome, BiSolidHome } from 'react-icons/bi';

import { Container } from './Container';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
`;

const Title = styled.a.attrs({
  href: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
  cursor: pointer;
  color: var(--colors-text);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  display: flex;
  column-gap: 0.75rem;
  align-items: center;
  text-transform: capitalize;
`;

export const Header = ({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: (v: string) => void;
}) => {
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>
            {theme === 'light' ? (
              <BiHome size={32} />
            ) : (
              <BiSolidHome size={32} />
            )}
          </Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? (
              <BiMoon size={32} />
            ) : (
              <BiSolidMoon size={32} />
            )}
            {theme} Theme
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
