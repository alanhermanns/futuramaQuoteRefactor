import { useState, useEffect } from 'react';

const useFuturamaApiCallWParams = (numberOfQuotes) => {
  const [characters, setCharacters] = useState([]);
  const [click, setClick] = useState(false);
  
  useEffect(() => {
    getQuotes();
  }, [numberOfQuotes]);

  const getQuotes = () => {
    return fetch(`https://futuramaapi.herokuapp.com/api/quotes/${numberOfQuotes}`)
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setCharacters(res);
      });
  };

  return { characters, getQuotes };
};

export default useFuturamaApiCallWParams;
