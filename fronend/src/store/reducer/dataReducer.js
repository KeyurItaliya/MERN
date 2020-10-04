import {
    ADD_PRODUCT,
    USER_LOGIN_PROCESS
  } from '../types';

const initialState = {
  employee: [],
  userLogin: {}
  };

function dataReducer(state = initialState, action) {
  // console.log("actiomns : ", action.payload)
    switch (action.type) {
        case ADD_PRODUCT:
          return {
            ...state,
            employee: action.payload
          };
        case USER_LOGIN_PROCESS:
          return {
            ...state,
            userLogin: action.payload
          };
        default:
            return state;
    }
}

export default dataReducer