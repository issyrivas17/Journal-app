
/*

{
    auid: akjskajsakjsa
    name: 'Ismenia'
}

*/

import { types } from '../types/types'

const initialState = {
  uid: 123456,
  name: 'Ismenia',
  dir: {
    caricuao: 434
  }
}

export const authReducer = (state = { initialState }, action) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName
      }
    case types.logout :
      return {}

    default:
      return state
  }
}
