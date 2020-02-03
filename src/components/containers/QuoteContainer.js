import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Quote from '../Quote';
import getAFuturamaQuote from '../../services/FuturamaApi';

class FuturamaQuotes extends Component {

    state = {
      image : '',
      character : '',
      text: ''
    }

    fetchQuote = () => {
      getAFuturamaQuote()
        .then(({ character, quote }) => {
          this.setState(prevState => ({ character : character, text : quote }));
        });
    };

    componentDidMount(){
      this.fetchQuote();
    }

    render(){
      return <>
        <Quote image = {this.state.image} character = {this.state.character} quote = {this.state.text} />
      </>;
    }
} 

export default FuturamaQuotes;

