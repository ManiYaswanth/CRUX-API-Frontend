import React from 'react';
import { Button } from '@mui/material';

const SearchButton = ({ handleSearch }) => {
  return (
    <div style={ {display: "flex", justifyContent: "center", marginTop: "20px"}}>
    <Button variant="contained" color="primary" onClick={handleSearch}>
      Search
    </Button></div>
  );
};

export default SearchButton;
