import React from 'react';
import styled from 'styled-components';
import myPicture from '../imgs/1.jpg';

const Home = styled.div`
  min-height: 100vh;
  background: url(${myPicture}) center no-repeat;
  background-size: cover;
  border: 1px solid transparent;
`;

const Component = () => {
  return (
    <Home>
    </Home>
  )
}

export default Component;