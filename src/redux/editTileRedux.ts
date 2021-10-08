import {useSelector} from "react-redux";
import {  BellyBandSpec } from '../belly-band'
import { useDispatchForAction } from './useDispatchForAction'

const BELLY_BAND_BEGIN_EDIT = 'BELLY_BAND_EDIT_START';
const BELLY_BAND_END_EDIT = 'BELLY_BAND_EDIT_END';

export const useEditBellyBand = () => {
  const bellyBands = useSelector((state: any) => state.bellyBands) as BellyBandSpec[]
  const editingBellyBandId = useSelector((state: any) => state.editingBellyBand) as number || undefined
  const editingBellyBand = bellyBands.find(band => band.id === editingBellyBandId)

  return {
    editingBellyBand,
    editBellyBand: useDispatchForAction<BellyBandSpec>(BELLY_BAND_BEGIN_EDIT),
    endEditBellyBand: useDispatchForAction<void>(BELLY_BAND_END_EDIT)
  };
};

export const editingBellyBandReducer = (state: any = {}, action: any) => {
  if (action.type === BELLY_BAND_BEGIN_EDIT) {
    return {
      ...state,
      editingBellyBand: action.payload.id,
    };
  } else if (action.type === BELLY_BAND_END_EDIT) {
    return {
      ...state,
      editingBellyBand: undefined,
    };
  }
  return state;
};
