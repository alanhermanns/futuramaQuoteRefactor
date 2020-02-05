import React, { useState } from 'react';
import Quote from '../Quote';
import Button from '../Button';
import useFuturamaApiCallWParams from '../FuturamaApiHook';

const FuturamaQuotesFn = () => {

  const [number, setNumber] = useState(1);

  const { characters, getQuotes } = useFuturamaApiCallWParams(number);
  const characterItems = characters.map((item, i) => {
    return (
      <Quote key={i} image={item.image} character={item.character} text={item.quote} />
    );

  });

  return <>
    <input type='number' onChange={({ target }) => setNumber(target.value) }/>
    {characterItems}
    <Button onClick={getQuotes}></Button>
  </>;
};

export default FuturamaQuotesFn;

