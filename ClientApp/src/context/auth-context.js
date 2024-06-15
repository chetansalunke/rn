import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {ip} from '../components/ip';
import {createContext, useEffect, useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const login = ({user_name, password}) => {
    setLoading(true);
    axios
      .post(`http://${ip}:3000/api/login_user`, {user_name, password})
      .then(res => {
        console.log(res.data);
        if(res.data.success === true){
          setUserInfo(res.data);
          setUserToken(res.data.token);
          AsyncStorage.setItem('userInfo', JSON.stringify(res.data));
          AsyncStorage.setItem('userToken', res.data.token);
        }
        else{
          AsyncStorage.setItem('userToken', 'null');
        }
        
      })
      .catch(e => {
        console.log(`login error ${e}`);
      })
      .finally(() => setLoading(false));
  };

  const logout = () => {
    setLoading(true);
    AsyncStorage.removeItem('userInfo');
    AsyncStorage.removeItem('userToken');
    setLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setLoading(true);
      let userToken = await AsyncStorage.getItem('userToken');
      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);
      if (userInfo) {
        setUserToken(userToken);
        setUserInfo(userInfo);
      }
    } catch (error) {
      console.log(`isLoggedIn error ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{login, logout, userToken, isLoading, userInfo}}>
      {children}
    </AuthContext.Provider>
  );
};
