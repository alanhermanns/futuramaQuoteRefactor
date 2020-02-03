
const getAFuturamaQuote = () => {
  return fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
    .then(res => {
      return res.json();
    })
    .then(([{ image, character, quote }]) => ({
      image,
      character,
      text: quote
    }));
};

export default getAFuturamaQuote;
