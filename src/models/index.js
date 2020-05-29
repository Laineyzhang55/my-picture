import AV, { User } from 'leancloud-storage';


AV.init({
  appId: "o3xTmjdOxCnGbv1wtQMfYAqb-gzGzoHsz",
  appKey: "gKpmEbU2uP9fkKwRvahVtbiR",
  serverURL: "https://o3xtmjdo.lc-cn-n1-shared.com"
});


const Auth = {
  register(username, password) {
    const user = new User();
    user.setUsername(username);
    user.setPassword(password);
    return new Promise((reslove, reject) =>{
      user.signUp().then(loginedUser => {
        console.log(`注册成功`);
        reslove(loginedUser);
      }, error=> {
        reject(error)
      });
    });
  },

  login(username, password) {
    return new Promise((resolve, reject) => {
      User.logIn(username, password).then(loginedUser=>resolve(loginedUser),error=> reject(error));
    });
  },

  logout() {
    User.logOut();
  },

  getCurrentUser() {
    return User.current()
  }

}

const Image = {
  add(file, filename) {
    const item = new AV.Object('Image');
    const avFile = new AV.File(filename,file);
    item.set('filename', filename)
    item.set('owner', User.current())
    item.set('url', avFile);
    return new Promise((resolve,reject) => {
      item.save().then(serverFile => resolve(serverFile), error => reject(error));
    });
  },
  
  find({page=0, limit=10}){
    const query = new AV.Query('Image');
    query.include('owner')
    query.limit(limit);
    query.skip(page*limit);
    query.equalTo('owner', User.current());
    return new Promise((resolve, reject) => {
      query.find().then(result=> resolve(result)).catch(err=> reject(err))
    })
  },

  
}

window.Image = Image
export {
  Auth,
  Image
}