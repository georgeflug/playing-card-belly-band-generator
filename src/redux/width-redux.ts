import {useSelector} from "react-redux";
import { useDispatchForAction } from './useDispatchForAction'

const SET_WIDTH_ACTION = 'SET_WIDTH';

export const widthReducer = (state: any = {}, action: any) => {
  if (action.type === SET_WIDTH_ACTION) {
    return {
      ...state,
      width: action.payload
    };
  }
  return state
};

export const useWidth = () => {
  return {
    width: useSelector((state: any) => state.width),
    setWidth: useDispatchForAction(SET_WIDTH_ACTION)
  };
};
