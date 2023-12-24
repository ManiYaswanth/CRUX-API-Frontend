import React from 'react';
import { TextField } from '@mui/material';

const UrlInput = ({ url, setUrl }) => {
  return (
    <TextField
      label="Enter URL (Comma Separated Values)"
      variant="outlined"
      fullWidth
      margin="normal"
      value={url}
      onChange={(e) => setUrl(e.target.value)}
    />
  );
};

export default UrlInput;
