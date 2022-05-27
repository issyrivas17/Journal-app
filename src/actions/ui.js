/* eslint-disable */
import { types } from '../types/types'

export const setError = (err) => ({
  type: types.uiSetError,
  payload: err
})

export const removeError = () => ({
  type: types.uiRemoveError
}) 

export const uiStartLoading = () => ({
  type: types.uiStarLoanding
}) 

export const uiFinishloanding = () => ({
  type: types.uiFinisLoanding
})

