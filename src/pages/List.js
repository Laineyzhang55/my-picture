import React, { useEffect, useRef } from 'react';
import { useStores } from '../stores'; 
import { observer } from 'mobx-react';
import InfiniteScroll from 'react-infinite-scroller';
import { List,  Spin } from 'antd';
import styled from 'styled-components';

const Image = styled.img`
  width: 200px;
  height: 125px;
`;

const Total =observer(() =>{
  const { HistoryStore } = useStores();
  const handLoad = () => {
         HistoryStore.find()
       }
  useEffect(() => {
    return () => HistoryStore.reset();
  }, [])

  return (
    <div>
      <InfiniteScroll 
        initialLoad={true}
        pageStart = {0}
        loadMore = {handLoad}
        hasMore = {!HistoryStore.isLoading && HistoryStore.hasMore}
        useWindow = {true}
      >
        <List
          dataSource = {HistoryStore.list}
          renderItem = {
            item => 
              <List.Item  key={item.id}>
                <div>
                  <Image src={item.attributes.url.attributes.url} />
                </div>
                <div>
                  <h5>{item.attributes.filename}</h5>
                </div>
                <div>
                  <a target="_blank" href={item.attributes.url.attributes.url} >点击预览</a>
                </div>
              </List.Item>
          }
        >
          {HistoryStore.isLoading && HistoryStore.hasMore && (
            <div>
              <Spin tip='加载中' />
            </div>
          )}
        </List>
      </InfiniteScroll>
    </div>
  )
})

export default Total;