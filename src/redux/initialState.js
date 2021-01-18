import {defaultStyles, defaultTitle} from '@/constans'
import {storage} from '@core/utils'

export const defaultState = {
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyles: defaultStyles,
  title: defaultTitle
}

const normalize = state => ({
  ...state,
  currentStyles: defaultStyles,
  currentText: ''
})
export const initialState = storage('excel-state')
  ? normalize(storage('excel-state'))
  : defaultState