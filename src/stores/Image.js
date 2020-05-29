import { observable, action} from 'mobx';
import { Image } from '../models';
import { message } from 'antd';

class ImageStore{
  @observable file = null;
  @observable filename = "";
  @observable serverFile = null;
  @observable isUploading = false;
  @observable id = '';

  @action setFile(newFile) {
    this.file = newFile
  };

  @action setFilename(newFilename) {
    this.filename = newFilename
  };
 
  @action upload() {
    this.serverFile = null;
    this.isUploading = true;
    return new Promise((reslove,reject)=> {
      Image.add(this.file,this.filename).then(serverFile => {
        console.log('上传成功');
        this.serverFile = serverFile;
        this.id = serverFile.createAt.id
        reslove(serverFile)
      }).catch(err=> {
        message.error('上传失败')
        reject(err)
      }).finally(() => this.isUploading = false)
    })
  };

  @action reset() {
    this.serverFile = null;
    this.isUploading = false;
  }
  
}

export default new ImageStore()
