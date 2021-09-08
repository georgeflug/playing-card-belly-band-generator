import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BellyBandSpec } from '../belly-band'
import { rootReducer } from './rootReduxReducer'

const bellyBands: BellyBandSpec[] = [
  {
    width: 30,
    height: 20,
    depth: 10,
    text: "Test 1",
    textSize: 12,
  },
  {
    width: 35,
    height: 25,
    depth: 15,
    text: "Test 2",
    textSize: 12,
  }
]
export const store = createStore(rootReducer, { bellyBands }, composeWithDevTools());
