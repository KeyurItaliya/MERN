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
// axios.defaults.headers.post['authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjVmNmM0MGU1ODgwYWM5MWU2MDNmMzJkYiIsInVzZXJuYW1lIjoiZGlnaXRhbCIsInBhc3N3b3JkIjoiZGFmMjk4NWZjZTk1ZmIxY2ExNTUwMTcwN2ZhM2Q0YWEiLCJhZGRyZXNzIjoiYmhydWNoIiwiTW9iaWxlIjo4MTQwMjMwMjIyMiwiX192IjowfSwiaWF0IjoxNjAxOTUzMzQ0LCJleHAiOjE2MDIwMzk3NDR9.3sq37dIjE___uR3si7JO-FWF65kbSoSYTR-cikVCOwc';
export const employeeAction = () => (dispatch) => {
    return new Promise((resolve, reject) => {
          // const CORS_PROXY = "http://localhost:3001/";
        //   const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
          const request = axios({
            method: 'get',
            url: '/users',
            headers: {
              authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjVmNmM0MGU1ODgwYWM5MWU2MDNmMzJkYiIsInVzZXJuYW1lIjoiZGlnaXRhbCIsInBhc3N3b3JkIjoiZGFmMjk4NWZjZTk1ZmIxY2ExNTUwMTcwN2ZhM2Q0YWEiLCJhZGRyZXNzIjoiYmhydWNoIiwiTW9iaWxlIjo4MTQwMjMwMjIyMiwiX192IjowfSwiaWF0IjoxNjAxOTUzMzQ0LCJleHAiOjE2MDIwMzk3NDR9.3sq37dIjE___uR3si7JO-FWF65kbSoSYTR-cikVCOwc'
            }
        })
        request.then((res) => {
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



