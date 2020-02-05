import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ image, character, text, onClick }) => {
  return (
    <div onClick={onClick}>
      <img src = {image}></img>
      <p>{character} : {text}</p>
    </div>
  );
};

Quote.propTypes = {
  image : PropTypes.string,
  text : PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}; 

export default Quote;
