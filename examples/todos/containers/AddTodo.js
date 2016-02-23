import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

// 定义一个React组件，内部可以dispatch方法
// 比较容易理解!!!
let AddTodo = ({ dispatch }) => {
  // 局部变量的使用
  let input

  return (
    <div>
      <form onSubmit={e => {
        // 如何提交Form, 更改全局的状态
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

// https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
// 将组件和 Redux绑定，这样: dispatch就有意义了
// 而且: redux的store全局唯一? 这个如何体现呢?
AddTodo = connect()(AddTodo)

export default AddTodo
