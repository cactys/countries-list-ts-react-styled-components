import { styled } from 'styled-components';
import { Container } from './Container';
import { ReactNode } from 'react';

const Wrapper = styled.main`
  padding: 0.75rem 0;

  @media (min-width: 767px) {
    padding: 2rem;
  }
`;

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export { Main };
