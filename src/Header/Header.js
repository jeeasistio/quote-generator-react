import React from 'react';
import {
  Box,
  Typography
} from '@material-ui';

const Header = () => {
  return (
    <Box mt={2}>
      <Typography variant="h5" component="h1" align="center">Random Quote Generator</Typography>
    </Box>
  )
}

export default Header;