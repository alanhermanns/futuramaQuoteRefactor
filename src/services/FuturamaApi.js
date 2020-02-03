
const getAFuturamaQuote = () => {
  return fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then(res => {
      return res.json();
    })
    .then(response => {
      console.log(response);
      return {
        character: 'Ron Swanson',
        quote: response,
      };
    });
};

export default getAFuturamaQuote;
