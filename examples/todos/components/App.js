import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

// 表示层的架构
// AddTodo (带有交互)
// VisibleTodoList (带有交互)
// Footer （内部带有交互)
const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

// 如何导出: default App
export default App
