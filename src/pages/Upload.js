import React from 'react';
import { Upload, message, Spin } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useStores } from '../stores';
import styled from 'styled-components';
import { observer } from 'mobx-react';


const Load = styled.div`
  margin: 20px auto;
  max-width: 900px;
`;
const Tooltips = styled.div`
  margin: 20px auto;
  max-width: 900px;
  background: #ff5500;
  text-align: center;
  font-size: 18px;
`
const Image = styled.img`
  max-width: 300px;
`;
const Result = styled.div`
  margin: 50px auto;
  max-width: 900px;
  padding: 20px 100px;
  border: 1px dashed #ccc;
`;
const {Dragger} = Upload;

const Component = observer(() => {
  const { ImageStore, UserStore } = useStores();
  const props = {
    showUploadList: false,
    beforeUpload: file => {
      ImageStore.setFile(file);
      ImageStore.setFilename(file.name);
      if(UserStore.currentUser === null){
        message.warning('请先登录')
        return false
      };
      
      ImageStore.upload()
        .then((serverFile) => {
          console.log('上传成功')
          console.log(serverFile);
        }).catch((error) => {
          console.error(error.message);});
      return false;
    },
  };
    
    
  return (
    <>
     <Tooltips>
     {
      UserStore.currentUser? null : <div>请登录后再上传！</div>
    }
     </Tooltips>
      <Load>
        <Spin tip="上传中" spinning={ImageStore.isUploading}>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
            band files
          </p>
        </Dragger>
        </Spin>
      </Load>
        {
          ImageStore.serverFile? <Result>
          <h2>上传结果</h2>
          <dl>
          <dt>线上地址</dt>
              <dd><a target="_blank" href={ImageStore.serverFile.attributes.url.attributes.url}>
                {ImageStore.serverFile.attributes.url.attributes.url}</a></dd>
              <dt>文件名</dt>
              <dd>{ImageStore.filename}</dd>
              <dt>图片预览</dt>
              <dd>
                <Image src={ImageStore.serverFile.attributes.url.attributes.url}/>
              </dd>
          </dl>
        </Result> : null 
        }
    </>
 
  )
})

export default Component;