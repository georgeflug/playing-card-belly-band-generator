import {useSelector} from "react-redux";
import { BellyBandSpec } from '../belly-band'
import { useDispatchForAction } from './useDispatchForAction'

const BELLY_BAND_ADD = 'BELLY_BAND_ADD';
const BELLY_BAND_UPDATE = 'BELLY_BAND_UPDATE';

export type BellyBandUpdateProps = {
  index: number
  patchValues: Partial<BellyBandSpec>
}

export const bellyBandReducer = (state: any = {}, action: any) => {
  if (action.type === BELLY_BAND_ADD) {
    return {
      ...state,
      bellyBands: [
        ...(state.bellyBands || []),
        {}
      ]
    };
  } else if (action.type === BELLY_BAND_UPDATE) {
    const newBellyBands = [...state.bellyBands]
    const updateProps = action.payload as BellyBandUpdateProps
    console.log(updateProps)
    newBellyBands[updateProps.index] = {
      ...newBellyBands[updateProps.index],
      ...updateProps.patchValues
    }
    return {
      ...state,
      bellyBands: newBellyBands
    }
  }
  return state;
};

export const useBellyBands = () => {
  return {
    bellyBands: useSelector((state: any) => state.bellyBands) as BellyBandSpec[],
    addBellyBand: useDispatchForAction<void>(BELLY_BAND_ADD),
    updateBellyBand: useDispatchForAction<BellyBandUpdateProps>(BELLY_BAND_UPDATE)
  };
};
