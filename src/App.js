import React, { useState } from 'react';
import { Container } from '@mui/material';
import UrlInput from './Components/UrlInput';
import FilterMetric from './Components/FilterMetric';
import ThresholdFilter from './Components/ThresholdFilter';
import SearchButton from './Components/SearchButton';
import DataTable from './Components/DataTable';
import constants from './Macros';
import Error from './Components/Error';

const App = () => {
  const [url, setUrl] = useState('');
  const [data, setData] = useState([]);
  const [filterMetric, setFilterMetric] = useState([]);
  const [thresholdFilter, setThresholdFilter] = useState('');
  const [errorMsg, setError] = useState('')
  const handleSearch = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
          'urls': url,
          'filterMetric': filterMetric,
          'thresholdFilter': thresholdFilter
        })
  };
    try {
      const response = await fetch(`${constants.backend_server_ip}/api/v1/report`, requestOptions);
      console.log(response);    
      if (response.status !== 200){
        setData([]);
        setError(`${response.status} - ${response.statusText}`);
      }
        
      
      else{
        const result = await response.json();
        setData(result);
        setError('');
      }
      console.log(data);
    } catch (error) {
      setError(error);
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Container>
      <UrlInput url={url} setUrl={setUrl} />
      <div style={{display: "flex"}}>
        <FilterMetric
          options={constants.metricFilterOptions}
          selectedValues={filterMetric}
          onChange={(e) => setFilterMetric(e.target.value)}
        />
        <ThresholdFilter
        options={constants.thresholdFilterOptions}
        selectedValue={thresholdFilter}
        onChange={(e) => setThresholdFilter(e.target.value)}
      />
    </div>
    <SearchButton handleSearch={handleSearch} />
      { <DataTable data={data} />}
      {errorMsg !== '' && <Error error={errorMsg} />}
    </Container>
  );
};

export default App;
