# My Picture

## 项目背景
因为个人喜欢将平时拍摄的照片上传的QQ空间以做保存，但是现在已经非常长时间不使用QQ了，因此想设计一个专门存储照片的网站。

## 技术栈
React， React Hooks，mobx， mobx-react, create-react-app, styled-components, jsx， antd组件等

## 使用方法
```
git@github.com:Laineyzhang55/my-picture.git
npm install
npm start
```

## 项目进展
- 5/26 搭建项目雏形，网页设计参考,图片资源来着谷歌图片；
```
npm install -g create-react-app
create-react-app my_picture
```
项目文件新建源码文件
```
components
  Header.js
  Footer.js
pages
  Home.js
  Upload.js
  Login.js
  Register.js
  History.js
  About.js
modles
  index.js
stores
  待更新
```
- 5/27 针对主页面进行设计
  网页参考`sitelnspir-Web Design Inspiration`

- 5/28 设计登录注册页面和上传页面，完成登录注册的基本功能
  基于leanCloud的用户接口和文件保存接口
  页面渲染使用antd的UI库

- 5/29 上传历史页面
  基于leanCloud的数据查询接口

- 5/30 完成About页面
更新中...