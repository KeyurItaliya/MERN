import {
    ADD_PRODUCT,
    USER_LOGIN_PROCESS,
    SET_OPEN_DELETE_CONFIRM_DIALOG
  } from '../types';

const initialState = {
  employee: [],
  userLogin: {},
  istasksDeleteOpenDialog: false,
  };

function dataReducer(state = initialState, action) {
  console.log("actiomns : ", action.payload)
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
        case SET_OPEN_DELETE_CONFIRM_DIALOG: 
          return {
            ...state,
            istasksDeleteOpenDialog: action.payload
          }
        default:
            return state;
    }
}

export default dataReducer