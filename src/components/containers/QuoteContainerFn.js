import React, { useState, useEffect } from 'react';
import Quote from '../Quote';
import getAFuturamaQuote from '../../services/FuturamaApi';
import Button from '../Button';

const FuturamaQuotesFn = () => {
  
  const [image, setImage] = useState('');
  const [character, setCharacter] = useState('');
  const [text, setText] = useState('');
  const [click, setClick] = useState(false);

  const fetchQuote = () => {
    getAFuturamaQuote()
      .then(({ character, text, image }) => {
        console.log('thing');
        setImage(image);
        setCharacter(character);
        setText(text);
      });
  };

  // const changeClick = () => {
  //   setClick(!click);
  // };

  // useEffect(() => {
  //   if(click === true){
  //     fetchQuote()
  //       .then(() => {
  //         setClick(!click);
  //       });
  //   }
  // },
  // [click]
  // );
  return <>
    <Quote image = {image} character = {character} text = {text} />
    <Button onClick = {fetchQuote}/>
  </>;
};

export default FuturamaQuotesFn;

