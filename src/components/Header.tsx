import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { BiMoon, BiSolidMoon, BiHome, BiSolidHome } from 'react-icons/bi';

import { Container } from './Container';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div``;

const Title = styled.a.attrs({
  href: '/',
})``;

const ModeSwitcher = styled.div``;

export const Header = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    
  }, [theme])

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>
            <BiHome size={32} />
          </Title>
          <ModeSwitcher>
            <BiMoon size={32} /> Light Theme
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
