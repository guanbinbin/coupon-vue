import * as types from './mutations_types'
export default {
  [types.username] (state, username) {
    state.username = username
  }, 
  [types.sid] (state, sid) {
    state.sid = sid
  },
}
