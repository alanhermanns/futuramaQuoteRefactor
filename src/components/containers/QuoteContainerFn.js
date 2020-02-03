import React, { useState, useEffect } from 'react';
import PropTypes, { bool } from 'prop-types';
import Quote from '../Quote';
import getAFuturamaQuote from '../../services/FuturamaApi';
import Button from '../Button';

const FuturamaQuotes = () => {

  const [image, setImage] = useState('');
  const [character, setCharacter] = useState('');
  const [text, setText] = useState('');
  const [click, setClick] = useState(false);

  const fetchQuote = () => {
    getAFuturamaQuote()
      .then(({ character, text, image }) => {
        setImage(() => image);
        setCharacter(() => character);
        setText(() => text);
      });
  };

  const onClick = () => {
    setClick(click);
  };

  useEffect(() => {
    if(click === true){
      fetchQuote();
      setClick(!click);
    }
  });
  return <>
    <Quote image = {image} character = {character} text = {text} />
    <Button onClick = {onClick}/>
  </>;
};

export default FuturamaQuotes;

