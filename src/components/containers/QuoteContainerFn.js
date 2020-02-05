import React, { useState, useEffect } from 'react';
import Quote from '../Quote';
import Button from '../Button';
import useFuturamaApiCallWParams from '../FuturamaApiHook';
import useFuturamaApiCallWNameParams from '../FuturamaApiNameHook';

const FuturamaQuotesFn = () => {

  const [number, setNumber] = useState(1);
  const [name, setName] = useState('');

  const { characters, getQuotes } = useFuturamaApiCallWParams(number);
  
  const characterItems = characters.map((item, i) => {
    return (
      <Quote key={i} image={item.image} character={item.character} text={item.quote} onClick={(event) => {
        console.log(event.target.firstChild.data);
        setName(event.target.firstChild.data);}}/>
    );
  });

  const quotes = useFuturamaApiCallWNameParams(name);

  const quoteItemsByCharacter = quotes.map((item, i) => {
    return (
      <>
        <li key={i}>{item.quote}</li>
      </>
    );
  });

  return <>
    <input type='number' onChange={({ target }) => setNumber(target.value) }/>
    {characterItems}
    {name ? quoteItemsByCharacter : <></> }
    {quoteItemsByCharacter}
    <Button onClick={getQuotes}></Button>
  </>;
};

export default FuturamaQuotesFn;

