import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const ThresholdFilter = ({ options, selectedValue, onChange }) => {
  return (
    <FormControl fullWidth style={{ margin: '20px', width: "30%" }}>
      <InputLabel id="single-select-label">Select Threshold type</InputLabel>
      <Select
        labelId="single-select-label"
        id="single-select"
        value={selectedValue}
        onChange={onChange}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ThresholdFilter;
