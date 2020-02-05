import { useEffect, useState } from 'react';

const useFuturamaApiCallWNameParams = (name) => {
  
  const [quotes, setQuotes] = useState([]); 

  useEffect(() => {
    getQuotesByName(name);
  }, [name]);

  const getQuotesByName = () => {
    return fetch(`https://futuramaapi.herokuapp.com/api/characters/${name}`)
      .then(res => {
        return res.json();
      })
      .then(response => {
        setQuotes(response);
      });
  };
  return quotes;
};

export default useFuturamaApiCallWNameParams;
