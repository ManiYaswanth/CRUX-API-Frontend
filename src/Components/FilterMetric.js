import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Chip, Input } from '@mui/material';

const FilterMetric = ({ options, selectedValues, onChange }) => {
  return (
    <FormControl style={{ margin: '20px', width: "70%" }}>
      <InputLabel id="multi-select-label">Select Metrics</InputLabel>
      <Select
        labelId="multi-select-label"
        id="multi-select"
        multiple
        value={selectedValues}
        onChange={onChange}
        input={<Input id="select-multiple-chip" />}
        renderValue={(selected) => (
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {selected.map((value) => (
              <Chip key={value} label={value} style={{ margin: '2px' }} />
            ))}
          </div>
        )}
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

export default FilterMetric;
