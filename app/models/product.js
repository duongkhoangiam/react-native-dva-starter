import { delay } from '../utils'

export default {
  namespace: 'product',

  state: {
    products: []
  },

  effects: {
    *fetch({payload}, { call, put }) {
      yield call(delay, 3000)
      return 'fetch products ok'
    }
  },

  reducers: {
    
  },

  subscriptions: {
    
  },
}
