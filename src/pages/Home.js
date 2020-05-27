import React from 'react';
import styled from 'styled-components';
import myPicture from '../imgs/1.jpg';

const Home = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(&{myPicture});
  margin: 0;
  
`;

const Component = () => {
  return (
    <Home>
      <h1>My Picture</h1>
      <p>记录细节</p>
      <p>记录改变</p>
      <p>记录成长</p>
    </Home>
  )
}

export default Component;