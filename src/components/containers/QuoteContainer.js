import React, { Component } from 'react';
import PropTypes, { bool } from 'prop-types';
import Quote from '../Quote';
import getAFuturamaQuote from '../../services/FuturamaApi';
import Button from '../Button';

class FuturamaQuotes extends Component {

    state = {
      image : '',
      character : '',
      text: '',
      click: false
    }

    fetchQuote = () => {
      getAFuturamaQuote()
        .then(({ character, text, image }) => {
          this.setState(prevState => ({ character : character, text : text, image }));
        });
    };

    onClick = () => {
      this.setState(prevState => ({
        ...this.state,
        click: true
      }));
    }

    componentDidUpdate(){
      if(this.state.click === true){
        this.fetchQuote();
        this.setState(prevState => ({
          ...this.state,
          click : false,
        }));
      }
    }

    componentDidMount(){
      this.fetchQuote();
    }

    render(){
      return <>
        <Quote image = {this.state.image} character = {this.state.character} text = {this.state.text} />
        <Button onClick = {this.onClick}/>
      </>;
    }
} 

export default FuturamaQuotes;

