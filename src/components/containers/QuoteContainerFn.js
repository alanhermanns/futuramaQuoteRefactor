import React, { useState, useEffect } from 'react';
import Quote from '../Quote';
import getAFuturamaQuote from '../../services/FuturamaApi';
import Button from '../Button';
import useFuturamaApiCallWParams from '../FuturamaApiHook';

const FuturamaQuotesFn = () => {
  
  // const [image, setImage] = useState('');
  // const [character, setCharacter] = useState('');
  // const [text, setText] = useState('');
  const [number, setNumber] = useState(1);

  // const fetchQuote = () => {
  //   getAFuturamaQuote()
  //     .then(({ character, text, image }) => {
  //       setImage(image);
  //       setCharacter(character);
  //       setText(text);
  //     });
  // };

  const { characters, getQuotes } = useFuturamaApiCallWParams(number);
  const characterItems = characters.map((item, i) => {
    return (
      <Quote key={i} image={item.image} character={item.character} text={item.quote} />
    );

  });

  return <>
    <input type='text' onChange={({ target }) => setNumber(target.value) }/>
    {characterItems}
    <Button onClick={getQuotes} />
  </>;
};

export default FuturamaQuotesFn;

