import React, { useState, useEffect } from 'react';
import Quote from '../Quote';
import getAFuturamaQuote from '../../services/FuturamaApi';
import Button from '../Button';

const FuturamaQuotesFn = () => {
  
  const [stateimage, setImage] = useState('');
  const [character, setCharacter] = useState('');
  const [statetext, setText] = useState('');
  const [stateclick, setClick] = useState(false);

  const fetchQuote = () => {
    getAFuturamaQuote()
      .then(({ character, text, image }) => {
        setImage(image);
        setCharacter(character);
        setText(text);
      });
  };

  const changeClick = () => {
    setClick(stateclick);
  };

  useEffect(() => {
    if(stateclick === true){
      fetchQuote()
        .then(() => {
          setClick(!stateclick);
        });
    }
  });
  return <>
    <Quote image = {stateimage} character = {character} text = {statetext} />
    <Button onClick = {changeClick}/>
  </>;
};

export default FuturamaQuotesFn;

