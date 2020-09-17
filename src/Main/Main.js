import React from 'react';
import {
  Box
} from '@material-ui';
import QuoteType from './QuoteType.js';
import QuoteItem from './QuoteItem.js';
import GenerateQuote from './GenerateQuote.js';

const Main = () => {

  const [type, setType] = React.useState('beauty');
  const [quote, setQuote] = React.useState({ text: '', author: ''});
  
  const getQuote = async () => {
    const data = await fetch(`/assets/quotes/${type}.json`);
    const quotes = await data.json();
    const quote = await quotes[Math.floor(Math.random() * (quotes.length - 0 + 1) ) + 0];
    const { text, author } = await quote;
    setQuote({
      text, author
    })
  }
  
  React.useEffect(() => {
    getQuote()
  }, [type])

  return (
    <Box
      minHeight={"70vh"} 
      display="flex" 
      flexDirection="column" 
      justifyContent="space-evenly"
      alignItems="center"
      px={4}
    >
      <QuoteType type={type} setType={setType} />
      <QuoteItem quote={quote} />
      <GenerateQuote getQuote={getQuote} />
    </Box>
  )
}

export default Main;