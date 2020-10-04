import { ADD_PRODUCT } from '../types';
import axios from 'axios';

const fetchCitySuccess = (res) =>{
  return{
    type: ADD_PRODUCT,
    payload: res
  }
}

const ROOT_URL = 'http://localhost:8000';

axios.defaults.baseURL = ROOT_URL;
axios.defaults.headers.post['Content-Type'] = 'aplication/json';

export const employeeAction = () => (dispatch) => {
    return new Promise((resolve, reject) => {
          // const CORS_PROXY = "http://localhost:3001/";
        //   const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
        axios
          .get('/users')
          .then((res) => {
            // console.log("all res Data",res)
            const categoyuData = res.data;
            if (categoyuData) {
                dispatch(fetchCitySuccess(categoyuData));
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



