import {
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
  ChangeEvent,
  ChangeEventHandler,
  FC,
} from 'react';
import { styled } from 'styled-components';
import ValueType, {
  ActionMeta,
  GetOptionValue,
  OptionContext,
  Options,
} from 'react-select';

import { Search } from './Search';
import { CustomSelect } from './CustomSelect';
import { options } from '../utils/constants';
import { IRegion } from '../App';

interface IControlsProps {
  theme: string;
  search: string;
  setSearch: (v: string) => void;
  onSearch: (search: string, region?: string) => void;
}

export interface IStateOptions {
  value: string;
  label: string;
}

export interface IDataOptions {
  readonly value: IStateOptions | null;
  readonly onChange: (newValue: IStateOptions | null) => void;
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

const Controls: FC<IControlsProps> = ({
  theme,
  search,
  setSearch,
  onSearch,
}) => {
  const [region, setRegion] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   const { value } = region;
  //   onSearch(search, value);
  // }, [region, search]);

  console.log(region);

  return (
    <Wrapper>
      <Search theme={theme} search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={(
          option: typeof Option | null,
          actionMeta: ActionMeta<typeof Option>
        ) => {
          setRegion(option);
        }}
      />
    </Wrapper>
  );
};

export { Controls };
