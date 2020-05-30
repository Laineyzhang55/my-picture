import React, { useRef } from 'react';
import { Upload, message, Spin } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useStores } from '../stores';
import styled from 'styled-components';
import { observer, useLocalStore } from 'mobx-react';


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
  const ref1 = useRef();
  const ref2 = useRef();

  const store = useLocalStore(()=>({
    width: null,
    setWidth(width) {
      store.width = width
    },
    get widthStr() {
      return store.width?`/w/${store.width}`:'';
    },

    height: null,
    setHeight(height) {
      store.height = height
    },
    get heightStr() {
      return store.height?`/h/${store.height}`:'';
    },
    get fullStr() {
      //?imageView2/0/w/800/h/400)
      return ImageStore.serverFile.attributes.url.attributes.url + '?imageView2/0' + store.widthStr + store.heightStr
    }
  }));

  const bindWidthChange = () => {
    store.setWidth(ref1.current.value);
  };

  const bindHeightChange = () => {
    store.setHeight(ref2.current.value);
  };
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
          <p className="ant-upload-text">请点击或拖拽上传图品</p>
          <p className="ant-upload-hint">
            支持.png/.jpg/.svg/.gif图片格式
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
              <dt>
                自定义尺寸
              </dt>
              <dd>
              <input ref={ref1} onChange={bindWidthChange} placeholder="最大宽度（可选）"/>
              <input ref={ref2} onChange={bindHeightChange} placeholder="最大高度（可选）"/>
              </dd>
              <dd>
                <a  target="_blank" href={store.fullStr}>{store.fullStr}</a>
              </dd>
          </dl>
        </Result> : null 
        }
    </>
 
  )
})

export default Component;