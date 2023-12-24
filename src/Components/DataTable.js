import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel } from '@mui/material';

const DataTable = ({ data }) => {
    const [orderBy, setOrderBy] = useState('');
    const [order, setOrder] = useState('asc');

    const handleSort = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const sortedData = [...data].sort((a, b) => {
        if (order === 'asc') {
        return a[orderBy] > b[orderBy] ? 1 : -1;
        } else {
        return a[orderBy] < b[orderBy] ? 1 : -1;
        }
    });
    console.log(data, sortedData);
  return (
    <TableContainer component={Paper} style={{ marginTop: '20px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
                <TableSortLabel
                    active={orderBy === 'origin'}
                    direction={orderBy === 'origin' ? order : 'asc'}
                    onClick={() => handleSort('origin')}
                >
                    Origin
                </TableSortLabel>
            </TableCell>
            <TableCell>
                <TableSortLabel
                    active={orderBy === 'metric'}
                    direction={orderBy === 'metric' ? order : 'asc'}
                    onClick={() => handleSort('metric')}
                >
                    Metric
                </TableSortLabel>
            </TableCell>
            <TableCell>
                <TableSortLabel
                    active={orderBy === 'start'}
                    direction={orderBy === 'start' ? order : 'asc'}
                    onClick={() => handleSort('start')}
                >
                    Start
                </TableSortLabel>
            </TableCell>
            <TableCell>
                <TableSortLabel
                    active={orderBy === 'end'}
                    direction={orderBy === 'end' ? order : 'asc'}
                    onClick={() => handleSort('end')}
                >
                    End
                </TableSortLabel>
            </TableCell>
            <TableCell>
                <TableSortLabel
                    active={orderBy === 'density'}
                    direction={orderBy === 'density' ? order : 'asc'}
                    onClick={() => handleSort('density')}
                >
                    Density
                </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.origin}</TableCell>
              <TableCell>{item.metric}</TableCell>
              <TableCell>{item.start}</TableCell>
              <TableCell>{item.end}</TableCell>
              <TableCell>{item.density}</TableCell>
            </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
