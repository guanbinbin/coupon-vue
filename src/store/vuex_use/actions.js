import * as types from './mutations_types'
export default  {
  username: ({commit}, obj) => {
    commit(types.username, obj)
  },
  sid: ({commit}, obj) => {
    commit(types.sid, obj)
  },
}
