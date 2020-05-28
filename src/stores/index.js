import AuthStore from './Auth';
import { createContext, useContext } from 'react';
import UserStore from './User';
import ImageStore from './Image';


const context = createContext({
  AuthStore,
  UserStore,
  ImageStore

});

Window.stores = {
  AuthStore,
  UserStore,
  ImageStore

};

export const useStores = ()=>useContext(context);