import { widthReducer } from './width-redux'

export function rootReducer(state: any = {}, action: any) {
  return {
    ...state,
    width: widthReducer(state, action),
  };
}
