import {
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
  ChangeEvent,
  ChangeEventHandler,
} from 'react';
import { styled } from 'styled-components';
import ValueType from 'react-select';

import { Search } from './Search';
import { CustomSelect } from './CustomSelect';
import { options } from '../utils/constants';
import { IRegion } from '../App';

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
  region,
  setRegion,
  onSearch,
}: {
  theme: string;
  search: string;
  setSearch: (v: string) => void;
  region?: IRegion;
  setRegion: (v: IRegion) => IRegion;
  onSearch: (search: string, region?: string) => void;
}) => {
  const handleChangeRegion = (e: IRegion) => {
    console.log(e);
    const { value, labels } = e;

    setRegion({ labels: labels, value: value });
  };

  useEffect(() => {
    onSearch(search, region?.value);
  }, [region, search]);

  return (
    <Wrapper>
      <Search theme={theme} search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={region?.value || ''}
        onChange={handleChangeRegion}
      />
    </Wrapper>
  );
};

export { Controls };
