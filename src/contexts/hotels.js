import { createContext } from 'react';

const extraDetails = {
  policies: [],
  essentials: []
};

export const hotelsContext = createContext({});
export const extraDetailsContext = createContext(extraDetails);