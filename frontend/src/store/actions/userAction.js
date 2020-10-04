import { USER_LOGIN_PROCESS } from '../types';
import axios from 'axios';

const registeCitySuccess = (res) =>{
  return{
    type: USER_LOGIN_PROCESS,
    payload: res
  }
}

export const employeeRegister = (datas) => (dispatch) => {
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:8000/register';
        const config = {
            headers: { 'content-type':  'application/json' }
        }
        axios({
            method: 'post',
            url: url,
            headers: config, 
            data: datas
          }).then((res) => {
            const categoyuData = res.data;
            if (categoyuData) {
                dispatch(registeCitySuccess(categoyuData));
                resolve({ message: 'Success' });
            } else {
                reject({ message: 'Something fetch Category wrong!!' });
            }
           
          })
          .catch((err) => {
            reject({ message: 'Something went wrong!!' });
          });
        });
};



