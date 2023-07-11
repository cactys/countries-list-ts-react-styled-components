import { styled } from 'styled-components';

import { Search } from './Search';

export const Controls = ({
  theme,
  search,
  setSearch,
}: {
  theme: string;
  search: string;
  setSearch: (v: string) => void;
}) => {
  return (
    <>
      <Search theme={theme} search={search} setSearch={setSearch} />
    </>
  );
};
