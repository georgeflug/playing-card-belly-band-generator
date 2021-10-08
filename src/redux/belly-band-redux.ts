import {useSelector} from "react-redux";
import { BellyBandSpec } from '../belly-band'
import { useDispatchForAction } from './useDispatchForAction'

const BELLY_BAND_ADD = 'BELLY_BAND_ADD';
const BELLY_BAND_UPDATE = 'BELLY_BAND_UPDATE';

export type BellyBandUpdateProps = {
  index: number
  patchValues: Partial<BellyBandSpec>
}

export const useBellyBands = () => {
  return {
    bellyBands: useSelector((state: any) => state.bellyBands) as BellyBandSpec[],
    addBellyBand: useDispatchForAction<void>(BELLY_BAND_ADD),
    updateBellyBand: useDispatchForAction<BellyBandUpdateProps>(BELLY_BAND_UPDATE)
  };
};

export const bellyBandReducer = (state: any = {}, action: any) => {
  if (action.type === BELLY_BAND_ADD) {
    return addBellyBandReducer(state);
  } else if (action.type === BELLY_BAND_UPDATE) {
    return bellyBandUpdateReducer(state, action.payload);
  }
  return state;
};

const addBellyBandReducer = (state: any = {}) => {
  return {
    ...state,
    bellyBands: [
      ...(state.bellyBands || []),
      {}
    ]
  };
}

const bellyBandUpdateReducer = (state: any = {}, payload: any) => {
  const newBellyBands = [...state.bellyBands]
  const updateProps = payload as BellyBandUpdateProps
  newBellyBands[updateProps.index] = {
    ...newBellyBands[updateProps.index],
    ...updateProps.patchValues
  }
  return {
    ...state,
    bellyBands: newBellyBands
  }
}