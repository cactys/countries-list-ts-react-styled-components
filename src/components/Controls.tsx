import { useState } from 'react';
import { styled } from 'styled-components';
import ValueType from 'react-select';

import { Search } from './Search';
import { CustomSelect } from './CustomSelect';
import { options } from '../utils/constants';

interface ISelectOption {
  value: string;
  label: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Controls = ({
  theme,
  search,
  setSearch,
}: {
  theme: string;
  search: string;
  setSearch: (newValue: string) => void;
}) => {
  const [region, setRegion] = useState('');

  return (
    <Wrapper>
      <Search theme={theme} search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={region}
        // onChange={setRegion}
      />
    </Wrapper>
  );
};

export { Controls };
