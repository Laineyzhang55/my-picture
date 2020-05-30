import React from 'react';
import Picture from '../imgs/cat.jpg';
import styled from 'styled-components';

const About = styled.div`
  margin: 10px auto;
  padding: 50px;
  height: 100vh;
  background: url(${Picture}) center no-repeat;
  background-size: contain;
  color: #444;
  line-height: 1.5;
`;
const H4 = styled.h4`
  margin-bottom: 10px;
  font-weight: 800;
`;

const P = styled.p`
  margin-bottom: 40px;
`;
const Component = () => {
  return (
    <About>
    <H4>使用说明</H4>
    <P>本网页是基于leanCloud作为后台支撑的专门用于图片存储的web端图床网站</P>
    <H4>项目进展</H4>
    <P>目前能支持注册、登录、图片上传、线上预览、查询上传历史记录功能</P>
    <H4>联系方式</H4>
    <P>如果您有好的建议，欢迎通过以下方式告知<br />
    邮箱：<a href="mailto:lainey_zhang47@163.com">lainey_zhang47@163.com</a>
    </P>
    <H4>感谢</H4>
    <P>图片来源：谷歌图片、Unsplash</P>
    </About>
  )
}

export default Component;