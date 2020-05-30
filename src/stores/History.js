import { observable, action } from 'mobx';
import { Image } from '../models';

class HistoryStore{
  @observable page = 0;
  @observable hasMore = true;
  @observable list = [];
  limit = 10;

  @action append(newList){
    this.list = this.list.concat(newList)
  }

  @action find(){
    this.hasMore = true;
      Image.find({page:this.page, limit:this.limit}).then(newList => {
        this.append(newList);
        this.page++;   
        if(newList.length < this.limit) {
          this.hasMore = false
        }
      }).catch(err => console.log(err))
  }

  @action reset() {
    this.page = 0;
    this.list = [];
    this.hasMore = true;
  }
}

export default new HistoryStore();