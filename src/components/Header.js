import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'antd';
import { useStores } from '../stores';
import { observer } from 'mobx-react';


const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ddd;
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
const H1 = styled.h1`
  margin: 0 auto; 
  color: #444;
`;
  const P=styled.p`
  margin: 10px 0;
  padding-right: 10px;
  font-size: 30px;
  font-family: iconfont;
  cursor: pointer;
  `;
const Nav = styled.nav`
  margin-right: 20px;
  margin-left: auto;
`;
const StyledButton = styled(Button)`
  margin-left: 15px;
`
const Component = observer(() => {
  const { UserStore, AuthStore } = useStores()
  const history = useHistory();
  const handleLogin= ()=> {
    history.push("/login");
  }
   const handleLogout = () =>{
    AuthStore.logout();
   }
  const handleRegister = () =>{
    history.push("/register");
  }
  
  return (
    <Header>
      <StyledLink to='/' exact>首页</StyledLink>
      <StyledLink to='/upload'>上传图片</StyledLink>
      <StyledLink to='/history'>上传历史</StyledLink>
      <StyledLink to='/about'>关于我</StyledLink>
      <H1>My Picture</H1>
      <Nav>
        <P>&#xe61b;</P> 
      </Nav>
      <div>
        {UserStore.currentUser ? <>
        {UserStore.currentUser.attributes.username} <StyledButton type="primary" onClick={handleLogout}>注销</StyledButton>
        </> : <><StyledButton type="primary" onClick={handleLogin}>登录</StyledButton>
        <StyledButton type="primary" onClick={handleRegister}>注册</StyledButton></>}
      </div>
    </Header>
  )
})

export default Component;