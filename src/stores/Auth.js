import { observable, action} from 'mobx';
import { Auth } from '../models';
import UserStore from './User';
import ImageStore from './Image';
import { message } from 'antd';
import HistoryStory from './History';

class AuthStore{
  @observable values = {
    username: '',
    password: ''
  };
 
  @action setUsername(username) {
    this.values.username = username
  }

  @action setPassword(password) {
    this.values.password = password
  }

  @action register() {
    return new Promise((resolve, reject) => {
      Auth.register(this.values.username, this.values.password).then(user =>{
        console.log('注册成功')
        resolve(user)
      }).catch(err=>{
        message.error('注册失败')
        reject(err)
       });
    })
  }
  @action login(){
    return new Promise((resolve, reject) =>{
      Auth.login(this.values.username, this.values.password).then(user=>{
        UserStore.pullUser();
        resolve(user);
      }).catch(err=>{
        UserStore.resetUser();
        reject(err);
      })
    });
  };

  @action logout() {
    Auth.logout();
    UserStore.resetUser();
    ImageStore.reset();
    HistoryStory.reset();
  }
}

export default new AuthStore()
