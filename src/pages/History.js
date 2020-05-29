import React from 'react';
import Total from './List';
import styled from 'styled-components';

const Record = styled.div`
  margin: 30px;
  padding 30px 50px;
  background: #eee;
`;

const History = () => {
  return (
    <Record>
    <Total />
    </Record>
  )
}

export default History;