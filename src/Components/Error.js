import React from 'react';

const Error = ({ error }) => {
  return (
    <div style={{margin: "10%", color: "red", fontSize: "20px"}}>
        Error receiving data for the input
        <div>{error}</div>
    </div>
  );
};

export default Error;