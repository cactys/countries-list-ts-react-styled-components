import axios from 'axios';
import { ALL_COUNTRIES } from './constants';

// const checkingResponse = (res: Response) => {
//   return res.ok
//     ? res.json()
//     : res.json().then((err) => Promise.reject(err));
// };

const getAllCountries = () => {
  return axios.get(ALL_COUNTRIES);
};

export { getAllCountries };
