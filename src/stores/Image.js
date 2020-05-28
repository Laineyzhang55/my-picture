import { observable, action} from 'mobx';
import { Image } from '../models';

class ImageStore{
  @observable file = null;
  @observable filename = "";
  @observable serverFile = null;
  

  @action setFile(newFile) {
    this.file = newFile
  };

  @action setFilename(newFilename) {
    this.filename = newFilename
  };
 
  @action upload() {
    this.serverFile = null;
    return new Promise((reslove,reject)=> {
      Image.add(this.file,this.filename).then(serverFile => {
        console.log('上传成功');
        this.serverFile = serverFile;
        reslove(serverFile)
      }).catch(err=> {
        reject(err)
      })
    })
  };

  @action reset() {
    this.file = null;
    this.serverFile = null;
  }
  
}

export default new ImageStore()
