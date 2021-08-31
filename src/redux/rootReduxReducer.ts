import { bellyBandReducer } from './belly-band-redux'
import { widthReducer } from './width-redux'

export function rootReducer(state: any = {}, action: any) {
  let newState = { ...state };
  newState = widthReducer(newState, action);
  newState = bellyBandReducer(newState, action);
  return newState;
}
