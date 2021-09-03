import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BellyBandSpec } from '../belly-band'
import { rootReducer } from './rootReduxReducer'

const bellyBands: BellyBandSpec[] = [
  {
    width: 30,
    height: 20,
    depth: 10,
  },
  {
    width: 35,
    height: 25,
    depth: 15,
  }
]
export const store = createStore(rootReducer, { bellyBands }, composeWithDevTools());
