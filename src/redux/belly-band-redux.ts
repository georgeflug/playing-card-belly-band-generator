import {useSelector} from "react-redux";
import { useDispatchForAction } from './useDispatchForAction'

const BELLY_BAND_ADD = 'BELLY_BAND_ADD';

export const bellyBandReducer = (state: any = {}, action: any) => {
  if (action.type === BELLY_BAND_ADD) {
    return {
      ...state,
      bellyBands: [
        ...(state.bellyBands || []),
        {}
      ]
    };
  }
  return state;
};

export const useBellyBands = () => {
  return {
    bellyBands: useSelector((state: any) => state.bellyBands),
    addBellyBand: useDispatchForAction(BELLY_BAND_ADD)
  };
};
