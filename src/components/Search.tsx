import { ChangeEvent } from 'react';
import { styled } from 'styled-components';

import { BiSearchAlt, BiSolidSearch } from 'react-icons/bi';

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 0.5rem 0.75rem;
  display: flex;
  align-items: center;
  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1.5rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...',
})`
  padding: 0.5rem 0.75rem;
  margin-left: 1.75rem;
  border: none;
  outline: none;
  background-color: var(--colors-bg);
  color: var(--colors-text);
  width: 100%;
`;

export const Search = ({
  theme,
  search,
  setSearch,
}: {
  theme: string;
  search: string;
  setSearch: (v: string) => void;
}) => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <InputContainer>
      {theme === 'light' ? (
        <BiSearchAlt size={32} />
      ) : (
        <BiSolidSearch size={32} />
      )}
      <Input onChange={handleSearch} value={search} />
    </InputContainer>
  );
};
