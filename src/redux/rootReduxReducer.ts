import { bellyBandReducer } from './belly-band-redux'
import { editingBellyBandReducer } from './editTileRedux'
import { widthReducer } from './width-redux'

export function rootReducer(state: any = {}, action: any) {
  let newState = { ...state };
  newState = widthReducer(newState, action);
  newState = bellyBandReducer(newState, action);
  newState = editingBellyBandReducer(newState, action);
  return newState;
}
