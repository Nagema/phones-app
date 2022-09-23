import React, { createContext } from 'react'
import useFetch from '../utilHooks/useFetch';

export const Phones = createContext();

export const PhonesProvider = ({children}) => {
  
    const { phones, setPhones } = useFetch({
      url: '/phones',
    });
  
    return (
      <Phones.Provider value={{
        phones,
        setPhones
        }}>
          {children}
      </Phones.Provider>
    )
  }
  
  export default PhonesProvider