import React from 'react';
import styled from 'styled-components';
import myPicture from '../imgs/1.jpg';

const Home = styled.div`
  min-height: 100vh;
  background: url(${myPicture}) center no-repeat;
  background-size: cover;
  border: 1px solid transparent;
`;


const Title =styled.div`
  margin-top: 50px;
  padding: 60px 60px;
  width: 300px;
  height: 300px;
  background: #ddd;
  opacity: 0.6;
  border-radius: 20%;
  color: #69541b;
  border: 1px solid transparent;
`;

const Component = () => {
  return (
    <Home>
      <Title>
        <h1>My Picture</h1>
        <p>记录细节</p>
        <p>记录改变</p>
        <p>记录成长</p>
      </Title>
    </Home>
  )
}

export default Component;