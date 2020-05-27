import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'antd';


const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d3c6a6;
`;
const StyledLink = styled(NavLink)`
  margin-left: 25px;
  text-decoration: none;
  cursor: pointer;
  color: #444;
 
  &.active {
    border-bottom: 1px solid #444;
  }
`;
  const P=styled.p`
  margin: 10px 0;
  padding-right: 10px;
  font-size: 30px;
  font-family: iconfont;
  cursor: pointer;
  `;
const Nav = styled.nav`
  margin-left: auto;
`;
const StyledButton = styled(Button)`
  margin-left: 15px;
`

const Component = () => {
  const history = useHistory();
  const handleLogin= ()=> {
    history.push("/login");
  }
  // const handleLogout = () =>{
  //   AuthStore.logout();
  // }
  const handleRegister = () =>{
    history.push("/register");
  }
  return (
    <Header>
      <StyledLink to='/' exact>首页</StyledLink>
      <StyledLink to='/upload'>上传图片</StyledLink>
      <StyledLink to='/history'>上传历史</StyledLink>
      <StyledLink to='/about'>关于我</StyledLink>
      <Nav>
        <P>&#xe61b;</P> 
      </Nav>
      <div>
        <StyledButton onClick={handleLogin}>登录</StyledButton>
        <StyledButton onClick={handleRegister}>注册</StyledButton>
        <StyledButton onClick={console.log('注销')}>注销</StyledButton>
      </div>
    </Header>
  )
}

export default Component;