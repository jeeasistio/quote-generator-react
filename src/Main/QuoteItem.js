import React from 'react';
import {
  Box,
  Typography
} from '@material-ui';

const QuoteItem = ({ quote }) => {
  return (
    <Box textAlign="center">
      <Typography paragraph component="q">{quote.text}</Typography>
      <Typography variant="body2" component="pre">- <i>{quote.author}</i></Typography>
    </Box>
  )
}

export default QuoteItem;