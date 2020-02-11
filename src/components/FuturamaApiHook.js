import { useState, useEffect } from 'react';

const useFuturamaApiCallWParams = (numberOfQuotes) => {
  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
    getQuotes();
  }, [numberOfQuotes]);

  const getQuotes = () => {
    return fetch(`https://futuramaapi.herokuapp.com/api/quotes/${numberOfQuotes}`)
      .then(res => {
        return res.json();
      })
      .then((res) => {
        setCharacters(res);
      });
  };

  return { characters, getQuotes };
};

export default useFuturamaApiCallWParams;
