import AuthStore from './Auth';
import { createContext, useContext } from 'react';
import UserStore from './User';
import ImageStore from './Image';
import HistoryStore from './History';


const context = createContext({
  AuthStore,
  UserStore,
  ImageStore,
  HistoryStore
});

Window.stores = {
  AuthStore,
  UserStore,
  ImageStore,
  HistoryStore
};

export const useStores = ()=>useContext(context);