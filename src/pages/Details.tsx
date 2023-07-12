import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ICardProps } from '../components/Card';

const Details = ({ countryInfo }: { countryInfo: ICardProps[] }) => {
  const [country, setCountry] = useState<ICardProps>();
  const { name } = useParams();

  useEffect(() => {
    if (countryInfo) {
      setCountry(countryInfo.filter((country) => country.name === name)[0]);
    }
  }, [countryInfo, name]);

  return <div>Details {country?.name}</div>;
};

export { Details };
