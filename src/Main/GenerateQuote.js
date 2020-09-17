import React from 'react';
import {
  Box,
  Button
} from '@material-ui';

const GenerateQuote = ({ getQuote }) => {
  
  return (
    <Box>
      <Button onClick={getQuote} variant="contained">Generate</Button>
    </Box>
  )
}

export default GenerateQuote;