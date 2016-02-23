import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

// http://redux.js.org/docs/basics/UsageWithReact.html
// 关注: Data Flow, 了解Reducers是如何工作的
const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp
