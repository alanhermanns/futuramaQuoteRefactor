import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ image, character, quote }) => {
  return (
    <div>
      <img src = {image}></img>
      <p>{character} : {quote}</p>
    </div>
  );
};

Quote.propTypes = {
  image : PropTypes.string.isRequired,
  quote : PropTypes.string.isRequired,
  character: PropTypes.string.isRequired
}; 

export default Quote;
