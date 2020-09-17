import React from 'react';
import {
  Box,
  Typography,
  Select,
  MenuItem
} from '@material-ui';

const QuoteType = ({ type, setType }) => {

  const types = ['beauty',
    'coffee',
    'friendship',
    'habits',
    'happiness',
    'life',
    'loneliness',
    'love',
    'marriage',
    'night',
    'risk',
    'sadness',
    'sport',
    'success',
    'travel'
  ]

  const changeType = (e) => {
    setType(e.target.value)
  }

  return (
    <Box>
      <Typography variant="subtitle2" component="pre" display="inline">Search quotes about  </Typography>
      <Select value={type} onChange={changeType}>
        {types.map(type => (
          <MenuItem value={type}>{type}</MenuItem>
        ))}
      </Select>
    </Box>
  )
}

export default QuoteType;